const express      = require('express');
const morgan       = require('morgan');
const MongoMethods = require('./mongoMethods.js');
const ObjectID     = require('mongodb').ObjectID;

const api = express.Router();
const collection = 'characterSheets';

//**************************************************************************
api.all('/*', function(req, res, next) {
  MongoMethods.connectToMongo('characterSheetDB').then(response => {
    [res.locals.client, res.locals.db] = response;
    console.log(`Successfully connected to database client.`)
    next();
  }).catch(err => {
    next(err)
  })
})

//**************************************************************************
//  C                                             P      O      S       T
//**************************************************************************

// Inserts whole new character sheet
api.post('/', (req, res, next) => {
  MongoMethods.insertDocuments(res.locals.db, collection, req.body).then(response => {
    res.send(`Successfully created new character sheet with id: ${response.insertId}`)
    next();
  }).catch(err => {
    next(err)
  })
})

//**************************************************************************
//  R                                                  G        E       T
//**************************************************************************
// Parse query
// Returns only character_info info and id
// Can only query for character_info fields
api.get('/', (req, res, next) => {
  res.locals.query = {};
  for (let query in req.query) {
    let key  = `character_info.${query}`;
    res.locals.query[key] = req.query[query];
  }
  next();
})

api.get('/', (req, res, next) => {
  MongoMethods.queryCollection(res.locals.db, collection, res.locals.query).then(response => {
    let resp = []
    let info;
    let character;
    for (var characterIdx in response) {
      character = response[characterIdx];
      info = character.character_info;
      info.id = character._id;
      resp.push(info);
    }
    res.send(resp);
    next();
  }).catch(err => {
    next(err);
  });
})

//----------------------------------------------------------------
const getCharacterSheet = function (req, res, next) {
  MongoMethods.queryCollection(res.locals.db, collection, {_id: new ObjectID(req.params.characterId)}).then(response => {
    if (response.length < 1) {
      let err = new Error(`Could not find character sheet with id: ${req.params.characterId}`)
      err.statusCode = 404;
      throw err;
    }
    res.locals.full_sheet = response[0]
    next();
  }).catch(err => {
    next(err);
  })
}

// Individual sheets
// Gets one specific character sheet by ID
api.get('/:characterId', getCharacterSheet, (req, res, next) => {
    res.send(res.locals.full_sheet);
    next();
})

//----------------------------------------------------------------
// Gets specific details from the character sheet
api.get('/:characterId/:detail', getCharacterSheet, (req, res, next) => {
  const detail = res.locals.full_sheet[req.params.detail]
  if (typeof detail == 'undefined') {
    let err = new Error(`Could not find information on '${req.params.detail}'`)
    err.statusCode = 404;
    next(err)
  }
  res.send(detail)
  next();
})

//**************************************************************************
//  U                                                  P        U       T
//**************************************************************************
api.put('/:characterId', (req, res, next) => {
  res.locals.id = req.body._id;
  delete req.body._id;
  next();
})

api.put('/:characterId', getCharacterSheet, (req, res, next) => {
  MongoMethods.updateDocument(
    res.locals.db,
    collection,
    {_id: new ObjectID(req.params.characterId)},
    req.body
  ).then(response => {
    res.send(response);
    next();
  }).catch(err => {
    next(err);
  })
})

//**************************************************************************
//  D                                 D      E      L     E      T      E
//**************************************************************************



//**************************************************************************
api.use('*', function(err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
  next();
})

api.all('/*', function(req, res, next) {
  MongoMethods.closeMongo(res.locals.client).then(response => {
    console.log(`Successfully closed client.`)
  })
})

module.exports = api;
