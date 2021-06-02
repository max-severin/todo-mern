const TaskModel = require('../models/task.model');

const getTasks = async (req, res) => {
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
};

const getTaskById = async (req, res) => {
  try {
    const task = await TaskModel.findById(req.params.id);

    res.json(task);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error,
      message: 'Server Error',
    });
  }
};

const postTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newTask = new TaskModel({
      title,
      description,
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
};

const putTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const existedTask = await TaskModel.findOneAndUpdate(
      { _id: req.params.id },
      { title, description },
      { new: true },
    );

    if (existedTask) {
      res.json({
        title: existedTask.title,
        description: existedTask.description,
      });
    } else {
      res.status(404).json({
        message: 'Task id is not found',
      });
    }
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error,
      message: 'Server Error',
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const deletedTask = await TaskModel.findByIdAndDelete(req.params.id);

    if (deletedTask) {
      res.json({
        title: deletedTask.title,
        description: deletedTask.description,
      });
    } else {
      res.status(404).json({
        message: 'Task id is not found',
      });
    }
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error,
      message: 'Server Error',
    });
  }
};

module.exports = {
  getTasks, getTaskById, postTask, putTask, deleteTask,
};
