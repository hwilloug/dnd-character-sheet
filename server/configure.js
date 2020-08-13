const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const characterSheet = require('./src/characterSheet_mongo')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(morgan('tiny'));
  app.use(cors());
  app.use('/api/character-sheet', characterSheet);
}
