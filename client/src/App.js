import { useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskController from './components/TaskController';

function App() {
  const {
    tasks, loading, message, getTasks, createTask, deleteTask
  } = TaskController([]);

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
        <TaskForm createTask={createTask} />

        {loading && <span>Loading...</span>}

        {message && <span>{message}</span>}

        {tasks && (
          <TaskList
            tasks={tasks}
            updateTask={alert}
            deleteTask={deleteTask}
          />
        )}
      </main>
    </div>
  );
}

export default App;
