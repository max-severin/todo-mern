import PropTypes from 'prop-types';
import './TaskList.scss';

const TaskList = ({ tasks, updateTask, deleteTask }) => (
  <ul className="task-list">
    {tasks.map((task) => (
      <li key={task._id} className="task-list--item">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>{task.createdAt}</p>
        <input
          className="task-list--delete-button"
          type="button"
          value="Delete"
          onClick={(event) => {
            deleteTask(task._id);
          }}
        />
      </li>
    ))}
  </ul>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  tasks: [],
};

export default TaskList;
