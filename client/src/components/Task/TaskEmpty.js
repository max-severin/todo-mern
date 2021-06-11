import Message from '../Message/Message';
import './TaskEmpty.scss';

const TaskEmpty = () => (
  <div className="empty-tasks">
    <Message message="Add a task to get started" additionalClassName="empty-tasks--message" />
  </div>
);

export default TaskEmpty;
