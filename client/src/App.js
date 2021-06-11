import { useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import RoundBackGround from './components/RoundBackGround/RoundBackGround';
import LoadingContainer from './components/Loading/LoadingContainer';
import Message from './components/Message/Message';
import TaskController from './components/Task/TaskController';
import TaskList from './components/Task/TaskList';
import TaskEmpty from './components/Task/TaskEmpty';

function App() {
  const {
    tasks, emptyTasks, loading, message, getTasks, createTask, updateTask, deleteTask
  } = TaskController([]);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="todo-app">
      <Header />

      <main className="todo-app-content">
        <RoundBackGround
          totalRoundItems={3}
        />

        {tasks && (
        <TaskList
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
        )}

        {emptyTasks && <TaskEmpty />}
      </main>

      <input
        className="add-task-button"
        type="button"
        value="Add"
        onClick={createTask}
      />

      {loading && <LoadingContainer totalLoadingItems={5} />}

      <Message message={message} additionalClassName="api-message" />
    </div>
  );
}

export default App;
