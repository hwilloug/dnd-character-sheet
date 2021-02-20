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
    res.status(500).send('Couldnt connect to database client...')
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
    res.status(400).send('Something went wrong...');
    next();
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
  console.log(res.locals.query)
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
    res.status(400).send("Something went wrong...");
    next();
  });
})

api.get('/:characterId', (req, res, next) => {
  MongoMethods.queryCollection(res.locals.db, collection, {_id: new ObjectID(req.params.characterId)}).then(response => {
    res.send(response[0]);
    next();
  }).catch(err => {
    res.status(400).send('Something went wrong...');
    next();
  });
})

//**************************************************************************
//  U                                                  P        U       T
//**************************************************************************
api.put('/:characterName', (req, res, next) => {
  res.locals.id = req.body._id;
  delete req.body._id;
  next();
})

api.put('/:characterName', (req, res, next) => {
  MongoMethods.updateDocument(
    res.locals.db,
    collection,
    {'character_info.character_name': req.params.characterName},
    req.body
  ).then(response => {
    res.send(response);
    next();
  }).catch(err => {
    res.status(400).send('Something went wrong....')
    next();
  })
})

//**************************************************************************
//  D                                 D      E      L     E      T      E
//**************************************************************************



//**************************************************************************
api.all('/*', function(req, res, next) {
  MongoMethods.closeMongo(res.locals.client).then(response => {
    console.log(`Successfully closed client.`)
  })
})

module.exports = api;
