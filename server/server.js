const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const DB = require('./db');
DB.on('error', console.error.bind(console, 'MongoDB connection error:'));
DB.once('open', () => console.log('MongoDB database connection established successfully'));

const taskModel = require('./models/task');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));



app.get('/', (req, res) => res.send('Hello, Friend'));

app.post('/api/tasks/', async (req, res) => {
  try {    
    const newTask = new taskModel({
      title: req.body.title,
      description: req.body.description,
    });

    await newTask.save();

    res.json({
      _id: newTask._id,
      title: newTask.title,
      description: newTask.description,
    });
  } catch(error) {
    console.error(error);

    res.status(500).json({
      error,
      message: 'Server Error'
    });
  }
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));