import PropTypes from 'prop-types';

const TaskList = ({ tasks, updateTask, deleteTask }) => (
  <ul>
    {tasks.map((task) => (
      <li key={task._id}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <input
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
