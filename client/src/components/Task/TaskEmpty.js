import Message from '../Message/Message';
import './TaskEmpty.scss';

const TaskEmpty = () => (
  <div className="tasks-empty-container">
    <Message message="Add a task to get started" />
  </div>
);

export default TaskEmpty;
