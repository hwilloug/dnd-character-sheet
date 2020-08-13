const express      = require('express');
const morgan       = require('morgan');
const fs           = require('fs');
const MongoMethods = require('./mongoMethods.js');

const api = express.Router();
const collection = 'characterSheets';

api.all('/*', function(req, res, next) {
  MongoMethods.connectToMongo('characterSheetDB').then(response => {
    [res.locals.client, res.locals.db] = response;
    console.log(`Successfully connected to database client.`)
    next();
  }).catch(err => {
    res.status(500).send('Couldnt connect to database client...')
  })
})

api.post('/', (req, res, next) => {
  MongoMethods.insertDocument(res.locals.db, collection, req.body).then(response => {
    res.send(`Successfully created new character sheet with id: ${response.insertId}`)
    next();
  }).catch(err => {
    res.status(400).send('Something went wrong...');
    next();
  })
})

// Parse query
// This needs to be more general
api.get('/', (req, res, next) => {
  const characterName = req.query.characterName;
  if (characterName) {
    res.locals.query = {'character_info.character_name': characterName};
  } else {
    res.locals.query = {};
  }
  next();
})

api.get('/', (req, res, next) => {
  MongoMethods.queryCollection(res.locals.db, collection, res.locals.query).then(response => {
    res.send(response);
    next();
  }).catch(err => {
    res.status(400).send('Something went wrong...');
    next();
  });
})

api.get('/:characterName', (req, res, next) => {
  MongoMethods.queryCollection(res.locals.db, collection, res.locals.query).then(response => {
    res.send(response);
    next();
  }).catch(err => {
    res.status(400).send('Something went wrong...');
    next();
  });
})

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

api.all('/*', function(req, res, next) {
  MongoMethods.closeMongo(res.locals.client).then(response => {
    console.log(`Successfully closed client.`)
  })
})

module.exports = api;
