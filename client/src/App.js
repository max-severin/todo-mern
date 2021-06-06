import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  const getTasks = async () => {
    try {
      const asyncRes = await axios.get(`${API_URL}/tasks`);

      setLoading(false);
      setTasks(asyncRes.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createTask = async (newTask) => {
    try {
      const asyncRes = await axios.post(`${API_URL}/tasks`, newTask);

      setLoading(false);
      setTasks(asyncRes.data.tasks);
      setMessage(asyncRes.data.message);

      setTimeout(setMessage, 500, '');
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const asyncRes = await axios.delete(`${API_URL}/tasks/${taskId}`);

      setLoading(false);
      setTasks(asyncRes.data.tasks);
      setMessage(asyncRes.data.message);

      setTimeout(setMessage, 500, '');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="todo-app">
      <header className="todo-app-header">
        <p>
          ToDo MERN App
        </p>
      </header>
      <main>
        <TaskForm createTask={({ title, description }) => {
          const newTitle = title.trim();
          const newDescription = description.trim();

          if (newTitle.length > 0) {
            setLoading(true);
            createTask({ title: newTitle, description: newDescription });
          }
        }}
        />

        {loading && <span>Loading...</span>}

        {message && <span>{message}</span>}

        {tasks && (
          <TaskList
            tasks={tasks}
            updateTask={alert}
            deleteTask={(taskId) => {
              if (taskId.length > 0) {
                setLoading(true);
                deleteTask(taskId);
              }
            }}
          />
        )}
      </main>
    </div>
  );
}

export default App;
