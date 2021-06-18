import { useState, useCallback } from 'react';
import { debounce } from 'lodash';
import {
  getTasks, createTask, updateTask, doneTask, deleteTask
} from './TaskAPI';

const TaskController = (initialTasks) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [emptyTasks, setEmptyTasks] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  const LOADING_DELAY = 900;
  const MESSAGE_TIMEOUT = 2500;
  const DEBOUNCE_DELAY = 1000;

  const checkEmptyTasks = (responseTasks) => {
    if (responseTasks.length > 0) {
      setEmptyTasks(false);
    } else {
      setEmptyTasks(true);
    }
  };

  const debouncedTitleUpdate = useCallback(
    debounce((_id, taskData) => {
      updateTask(_id, taskData)
        .then(({ message: responseMessage }) => {
          setTimeout(setLoading, LOADING_DELAY, false);
          setMessage(responseMessage);

          setTimeout(setMessage, MESSAGE_TIMEOUT, '');
        })
        .catch((error) => {
          console.error(error);
        });
    },
    DEBOUNCE_DELAY),
    []
  );

  const debouncedDescriptionUpdate = useCallback(
    debounce((_id, taskData) => {
      updateTask(_id, taskData)
        .then(({ message: responseMessage }) => {
          setTimeout(setLoading, LOADING_DELAY, false);
          setMessage(responseMessage);

          setTimeout(setMessage, MESSAGE_TIMEOUT, '');
        })
        .catch((error) => {
          console.error(error);
        });
    },
    DEBOUNCE_DELAY),
    []
  );

  return {
    tasks,
    emptyTasks,
    loading,
    message,
    getTasks: () => {
      getTasks()
        .then((responseTasks) => {
          setTimeout(setLoading, LOADING_DELAY, false);
          setTasks(responseTasks);

          checkEmptyTasks(responseTasks);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    createTask: () => {
      setLoading(true);
      setMessage('');

      createTask({
        title: '', description: ''
      })
        .then(({ task: newTask, message: responseMessage }) => {
          const updatedTasks = [newTask, ...tasks];

          setTimeout(setLoading, LOADING_DELAY, false);
          setTasks(updatedTasks);
          setMessage(responseMessage);

          checkEmptyTasks(updatedTasks);

          setTimeout(setMessage, MESSAGE_TIMEOUT, '');
        })
        .catch((error) => {
          console.error(error);
        });
    },
    updateTask: ({ _id, title, description }) => {
      if (typeof title !== 'undefined' || typeof description !== 'undefined') {
        const updatedTasks = tasks.map((task) => {
          if (task._id === _id) {
            const copiedTask = task;

            if (typeof title !== 'undefined') {
              copiedTask.title = title;
            }

            if (typeof description !== 'undefined') {
              copiedTask.description = description;
            }

            return copiedTask;
          }

          return task;
        });

        setLoading(true);

        setTasks(updatedTasks);

        checkEmptyTasks(updatedTasks);

        if (typeof title !== 'undefined') {
          debouncedTitleUpdate(_id, { _id, title });
        }

        if (typeof description !== 'undefined') {
          debouncedDescriptionUpdate(_id, { _id, description });
        }
      }
    },
    doneTask: async (_id, done) => {
      if (_id.length > 0) {
        setLoading(true);
        setMessage('');

        doneTask(_id, !done)
          .then(({ task: updatedTask, message: responseMessage }) => {
            setTimeout(setLoading, LOADING_DELAY, false);
            setTasks(tasks.map((task) => (task._id === updatedTask._id ? updatedTask : task)));
            setMessage(responseMessage);

            setTimeout(setMessage, MESSAGE_TIMEOUT, '');
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    deleteTask: async (_id) => {
      if (_id.length > 0) {
        setLoading(true);
        setMessage('');

        deleteTask(_id)
          .then(({ task: deletedTask, message: responseMessage }) => {
            const updatedTasks = tasks.filter((task) => task._id !== deletedTask._id);

            setTimeout(setLoading, LOADING_DELAY, false);
            setTasks(updatedTasks);
            setMessage(responseMessage);

            checkEmptyTasks(updatedTasks);

            setTimeout(setMessage, MESSAGE_TIMEOUT, '');
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  };
};

export default TaskController;
