import { useEffect } from 'react';
import './App.scss';
import RoundBackGround from './components/RoundBackGround/RoundBackGround';
import LoadingContainer from './components/Loading/LoadingContainer';
import Message from './components/Message/Message';
import TaskController from './components/Task/TaskController';
import TaskForm from './components/Task/TaskForm';
import TaskList from './components/Task/TaskList';
import TaskEmpty from './components/Task/TaskEmpty';

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
        <RoundBackGround
          totalRoundItems={3}
        />

        <TaskForm createTask={createTask} />

        {tasks.length > 0
          ? (
            <TaskList
              tasks={tasks}
              updateTask={alert}
              deleteTask={deleteTask}
            />
          )
          : (
            <TaskEmpty />
          )}
      </main>

      {loading && <LoadingContainer totalLoadingItems={5} />}

      {message && <Message message={message} additionalClassName="api-message" />}
    </div>
  );
}

export default App;
