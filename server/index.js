// for secret keys
require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');

const searchRouter = require('./routes/search-router')

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// to avoid CORS errors on local host 
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/api', searchRouter)

app.listen(port, () => console.log(`Listening on port ${port}`));