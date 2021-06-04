require('dotenv').config();

const PORT = process.env.PORT || 5000;

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const db = require('./db');
const taskRoutes = require('./routes/task.route');

app.use(cors());

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json; charset=UTF-8');
  next();
});

app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => res.send('Hello, Friend'));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
