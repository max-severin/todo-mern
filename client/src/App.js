import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTasks = async () => {
    try {
      const asyncRes = await axios.get(`${API_URL}/tasks`);

      setTasks(asyncRes.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createTask = async (newTask) => {
    try {
      const asyncRes = await axios.post(`${API_URL}/tasks`, newTask);

      setTasks(asyncRes.data.tasks);
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
            createTask({ title: newTitle, description: newDescription });
          }
        }}
        />
        <TaskList tasks={tasks} updateTask={alert} deleteTask={alert} />
      </main>
    </div>
  );
}

export default App;
