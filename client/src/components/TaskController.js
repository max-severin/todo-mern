import axios from 'axios';
import { useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL;

const useTaskState = (initialTasks) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  return {
    tasks,
    loading,
    message,
    getTasks: async () => {
      try {
        const asyncRes = await axios.get(`${API_URL}/tasks`);

        setLoading(false);
        setTasks(asyncRes.data);
      } catch (error) {
        console.error(error);
      }
    },
    createTask: async ({ title, description }) => {
      try {
        const newTitle = title.trim();
        const newDescription = description.trim();

        if (newTitle.length > 0) {
          setLoading(true);

          const asyncRes = await axios.post(`${API_URL}/tasks`, { title: newTitle, description: newDescription });

          setLoading(false);
          setTasks(asyncRes.data.tasks);
          setMessage(asyncRes.data.message);

          setTimeout(setMessage, 500, '');
        }
      } catch (error) {
        console.error(error);
      }
    },
    deleteTask: async (taskId) => {
      try {
        if (taskId.length > 0) {
          setLoading(true);

          const asyncRes = await axios.delete(`${API_URL}/tasks/${taskId}`);

          setLoading(false);
          setTasks(asyncRes.data.tasks);
          setMessage(asyncRes.data.message);

          setTimeout(setMessage, 500, '');
        }
      } catch (error) {
        console.error(error);
      }
    },
  };
};

export default useTaskState;
