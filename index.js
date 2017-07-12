require('dotenv').config();

const express = require('express');

const methodOverride = require('method-override');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const app = express();

const dir = {
  public: path.join(__dirname, 'public'),
  jquery: path.join(__dirname, 'node_modules/jquery/dist'),
};

// start morgan
app.use(logger(process.env.NODE_ENV === 'production' ? 'common' : 'dev'));

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());


// PORT
const PORT = process.argv[2] || process.env.PORT || 3000;

app.use(require('./resources'));

app.listen(PORT, () => console.log(`Listening! Current port is: ${PORT}`));

module.exports = app;
