import PropTypes from 'prop-types';
import Moment from 'react-moment';
import './TaskList.scss';

const TaskList = ({
  tasks, updateTask, doneTask, deleteTask
}) => (
  <div className="content-wrapper-container">
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task._id} className={`task-list--item ${task.done ? 'task-done' : ''}`}>
          <div className="task-list--item-header">
            <div className="task-list--item-actions">
              <input
                className="task-list--done-button"
                type="button"
                value={!task.done ? 'Done' : 'Undone'}
                onClick={(event) => {
                  doneTask(task._id, task.done);
                }}
              />
              <input
                className="task-list--delete-button"
                type="button"
                value="Delete"
                onClick={(event) => {
                  deleteTask(task._id);
                }}
              />
            </div>
            <div className="task-list--item-created-at">
              <Moment format="HH:mm">{task.createdAt}</Moment>
              {' '}
              <Moment format="MMMM Do">{task.createdAt}</Moment>
              ,
              {' '}
              <Moment format="dddd">{task.createdAt}</Moment>
            </div>
          </div>

          <div className="task-list--item-title">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={task.title}
              onChange={(event) => {
                updateTask({ _id: task._id, title: event.target.value });
              }}
              disabled={task.done}
            />
          </div>

          <div className="task-list--item-description">
            <textarea
              name="description"
              placeholder="Description"
              value={task.description}
              onChange={(event) => {
                updateTask({ _id: task._id, description: event.target.value });
              }}
              disabled={task.done}
            />
          </div>
        </li>
      ))}
    </ul>
  </div>
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
  doneTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  tasks: [],
};

export default TaskList;
