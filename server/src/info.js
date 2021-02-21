const express      = require('express');
const morgan       = require('morgan');
const MongoMethods = require('./mongoMethods.js');

const api = express.Router();

//**************************************************************************
api.all('/*', function(req, res, next) {
  MongoMethods.connectToMongo('informationDB').then(response => {
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
// Post a document to a collection
// document should be in the body of the request, as an array of objects
api.post('/:collection', (req, res, next) => {
  MongoMethods.insertDocuments(res.locals.db, req.params.collection, req.body).then(response => {
    res.send(response)
    next();
  }).catch(err => {
    next(err);
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
  if (req.params.collection == "levelUp") {
    if (req.query.experience) {
      const experience = parseInt(req.query.experience);
      res.locals.query = {
        minimum_experience: { $lt: experience },
        maximum_experience: { $gt: experience }
      }
    }
    console.log(res.locals.query)
  } else {
    for (var query in req.query) {
      let key  = `${query}`;
      res.locals.query[key] = req.query[query];
    }
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
    next(err);
  });
})

api.get('/levelUp/:level', (req, res, next) => {
  MongoMethods.queryCollection(
    res.locals.db,
    'levelUp',
    { level: parseInt(req.params.level) }
  ).then(response => {
    console.log(response)
    if (response.length < 1) {
      let err = new Error(`Could not find information on level ${req.params.level}`);
      err.statusCode = 404;
      throw err
    }
    res.send(response[0])
    next();
  }).catch(err => {
    next(err);
  })
})

//**************************************************************************
//  U                                                  P        U       T
//**************************************************************************
// todo
/*
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
*/

//**************************************************************************
//  D                                 D      E      L     E      T      E
//**************************************************************************
// todo maybe

//**************************************************************************
api.use('*', function(err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
  next();
})

api.all('*', function(req, res, next) {
  MongoMethods.closeMongo(res.locals.client).then(response => {
    console.log(`Successfully closed client.`)
  })
})

module.exports = api;
