const express      = require('express');
const morgan       = require('morgan');
const fs           = require('fs');
const MongoMethods = require('./mongoMethods.js');

const api = express.Router();

api.all('/', function(req, res, next) {
  MongoMethods.connectToMongo('test').then(response => {
    [res.locals.client, res.locals.db] = response;
    console.log(`Successfully connected to test database.`)
    next();
  })
})

api.get('/', (req, res, next) => {
  const characterName = req.query.characterName;

  if (characterName) {
    // Search for file with character file name
    const fileName = `../json/${characterName}.json`;
    fs.exists(fileName, (exists) => {
      if (exists) {
        fs.readFile(fileName, (err, data) => {
          if (err) res.status(400).send(err);
          res.send(data);
          next();
        });
      } else {
        res.status(404).send(`That character sheet doesn't exist: ${fileName}`);
        next();
      }
    })
  } else {
    res.send('List of characters will go here');
    next();
  }
})

api.put('/:characterName', (req, res, next) => {
  const characterName = req.params.characterName;
  const fileName = `../json/${characterName}.json`;
  fs.exists(fileName, (exists) => {
    if (exists) {
      fs.writeFile(fileName, JSON.stringify(req.body, null, 2), (err) => {
        if (err) res.status(400).send(err);
        res.send(req.body);
        next();
      });
    } else {
      res.status(404).send(`That character sheet doesn't exist: ${charaterName}`);
      next();
    }
  })

})

api.all('/', function(req, res, next) {
  MongoMethods.closeMongo(res.locals.client).then(response => {
    console.log(`Successfully closed client.`)
  });
})

module.exports = api;
