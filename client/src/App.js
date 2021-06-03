import './App.css';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <div className="todo-app">
      <header className="todo-app-header">
        <p>
          ToDo MERN App
        </p>
      </header>
      <main>
        <TaskForm createTask={alert} />
      </main>
    </div>
  );
}

export default App;
