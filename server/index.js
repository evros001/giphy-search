// for secret keys
require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');

const searchRouter = require('./routes/search-router')

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/giphy/key', (req, res) => {
//   res.send({ apiKey: 'OxgPHq5Lo88vYBbr52PeueBl0QzB58ib' });
// });

app.use('/api', searchRouter)

app.listen(port, () => console.log(`Listening on port ${port}`));