const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const DB = require('./db');
DB.on('error', console.error.bind(console, 'MongoDB connection error:'));
DB.once('open', () => console.log('MongoDB database connection established successfully'));

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => res.send('Hello, Friend'));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));