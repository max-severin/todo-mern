const TaskModel = require('../models/task.model');

const getTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find().sort({ createdAt: -1 });

    res.status(200).json(tasks);
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

    res.status(200).json(task);
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

    res.json({ task: newTask, message: 'A new task is created successfully' });
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
    const updatedTask = await TaskModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true },
    );

    if (updatedTask) {
      res.status(200).json({ task: updatedTask, message: 'The task is updated successfully' });
    } else {
      res.status(404).json({
        message: 'Task ID is not found',
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
      res.status(200).json({ task: deletedTask, message: 'The task is deleted successfully' });
    } else {
      res.status(404).json({
        message: 'Task ID is not found',
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
