const express  = require('express');
const morgan   = require('morgan');
const fs       = require('fs');

const api = express.Router();

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
        });
      } else res.status(404).send(`That character sheet doesn't exist: ${fileName}`);
    })
  } else {
    res.send('List of characters will go here');
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
      });
    } else res.status(404).send(`That character sheet doesn't exist: ${charaterName}`);
  })
})

module.exports = api;
