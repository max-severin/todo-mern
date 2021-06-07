import { useState } from 'react';
import { getTasks, createTask, deleteTask } from './TaskAPI';

const TaskController = (initialTasks) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  const LOADING_DELAY = 900;
  const MESSAGE_TIMEOUT = 2500;

  return {
    tasks,
    loading,
    message,
    getTasks: () => {
      getTasks()
        .then((responseTasks) => {
          setTimeout(setLoading, LOADING_DELAY, false);
          setTasks(responseTasks);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    createTask: ({ title, description }) => {
      const newTitle = title.trim();
      const newDescription = description.trim();

      if (newTitle.length > 0) {
        setLoading(true);

        createTask({
          title: newTitle, description: newDescription
        })
          .then(({ tasks: responseTasks, message: responseMessage }) => {
            setTimeout(setLoading, LOADING_DELAY, false);
            setTasks(responseTasks);
            setMessage(responseMessage);

            setTimeout(setMessage, MESSAGE_TIMEOUT, '');
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    deleteTask: async (taskId) => {
      if (taskId.length > 0) {
        setLoading(true);

        deleteTask(taskId)
          .then(({ tasks: responseTasks, message: responseMessage }) => {
            setTimeout(setLoading, LOADING_DELAY, false);
            setTasks(responseTasks);
            setMessage(responseMessage);

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
