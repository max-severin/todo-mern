const router = require('express').Router();
const TaskModel = require('../models/task.model');

router.get('/', async (req, res) => {
  try {
    const tasks = await TaskModel.find();

    res.json(tasks);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error,
      message: 'Server Error',
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const newTask = new TaskModel({
      title: req.body.title,
      description: req.body.description,
    });

    await newTask.save();

    res.json({
      title: newTask.title,
      description: newTask.description,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error,
      message: 'Server Error',
    });
  }
});

module.exports = router;
