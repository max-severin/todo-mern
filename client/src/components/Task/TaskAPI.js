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

export const deleteTask = async (taskId) => {
  try {
    const apiResponse = await axios.delete(`${API_URL}/tasks/${taskId}`);

    return apiResponse.data;
  } catch (error) {
    throw new Error(error);
  }
};
