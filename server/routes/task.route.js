const router = require('express').Router();

const {
  getTasks, getTaskById, postTask, putTask, deleteTask,
} = require('../controllers/task.controller');

router.get('/', getTasks);

router.get('/:id', getTaskById);

router.post('/', postTask);

router.put('/:id', putTask);

router.delete('/:id', deleteTask);

module.exports = router;
