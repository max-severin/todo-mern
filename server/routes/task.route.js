const router = require('express').Router();
const taskModel = require('../models/task.model');

router.get('/', (req, res) => {
  res.json({
    type: 'READ'
  });
});

router.post('/', async (req, res) => {
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

module.exports = router;