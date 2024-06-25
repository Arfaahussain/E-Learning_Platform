import api from './api';

export const login = async (email, password) => {
  try {
    const response = await api.post('/api/auth/login', { email, password });
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    // Add logic to handle the error or rethrow it
    console.error('An error occurred during login:', error);
    throw error;
  }
};

export const register = async (name, email, password) => {
  try {
    const response = await api.post('/api/auth/register', { name, email, password });
    return response.data;
  } catch (error) {
    // Add logic to handle the error or rethrow it
    console.error('An error occurred during registration:', error);
    throw error;
  }
};
