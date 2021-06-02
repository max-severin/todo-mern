const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => res.send('Hello, Friend'));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));