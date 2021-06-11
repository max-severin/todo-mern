import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getTasks = async () => {
  try {
    const apiResponse = await axios.get(`${API_URL}/tasks`);

    return apiResponse.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const createTask = async ({ title, description }) => {
  try {
    const apiResponse = await axios.post(`${API_URL}/tasks`, { title, description });

    return apiResponse.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateTask = async (_id, taskData) => {
  try {
    const apiResponse = await axios.put(`${API_URL}/tasks/${_id}`, taskData);

    return apiResponse.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteTask = async (_id) => {
  try {
    const apiResponse = await axios.delete(`${API_URL}/tasks/${_id}`);

    return apiResponse.data;
  } catch (error) {
    throw new Error(error);
  }
};
