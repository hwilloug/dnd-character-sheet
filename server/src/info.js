const express      = require('express');
const morgan       = require('morgan');
const MongoMethods = require('./mongoMethods.js');

const api = express.Router();
const collection = 'informational';

/*

Maybe have it so that the info sheets are on a different db? That would kind of make more sense. That way each info sheet could be its own collection. That would be a lot easier for modifying entries.

*/

//**************************************************************************
api.all('/*', function(req, res, next) {
  MongoMethods.connectToMongo('informationDB').then(response => {
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
// Post a document to a collection
// document should be in the body of the request, as an array of objects
api.post('/:collection', (req, res, next) => {
  MongoMethods.insertDocuments(res.locals.db, req.params.collection, req.body).then(response => {
    res.send(response)
    next();
  }).catch(err => {
    res.status(400).send('Something went wrong...');
    next();
  })
})

//**************************************************************************
//  R                                                  G        E       T
//**************************************************************************
// Get list of info documents
api.get('/', (req, res, next) => {
  res.locals.db.listCollections().toArray((err, response) => {
    if (err) res.status(400).send(err);

    let collections = [];
    for (let collection in response) {
      collections.push(response[collection]['name']);
    }
    res.send(collections);
    next();
  })
})

api.get('/:collection', (req, res, next) => {
  res.locals.query = {};
  for (var query in req.query) {
    let key  = `${query}`;
    res.locals.query[key] = req.query[query];
  }
  next();
})

api.get('/:collection', (req, res, next) => {
  MongoMethods.queryCollection(
    res.locals.db,
    req.params.collection,
    res.locals.query
  ).then(response => {
    res.send(response);
    next();
  }).catch(err => {
    res.status(400).send('Something went wrong...');
    next();
  });
})

//**************************************************************************
//  U                                                  P        U       T
//**************************************************************************
// todo
api.put('/:document', (req, res, next) => {
  MongoMethods.updateDocument(
    res.locals.db,
    res.params.document,
    {},
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
