import { useState } from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({ createTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <form onSubmit={(event) => {
      event.preventDefault();

      createTask({ title, description });

      setTitle('');
      setDescription('');
    }}
    >
      <input type="text" name="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />

      <textarea name="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />

      <input type="submit" />
    </form>
  );
};

TaskForm.propTypes = {
  createTask: PropTypes.func.isRequired
};

export default TaskForm;
