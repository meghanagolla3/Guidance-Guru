// import axios from 'axios';
import { getUserData, addCoins, updateUserProfile } from '../services/userService';

const API_BASE_URL = 'http://localhost:5000/api/users';

export const registerUser = async (userData) => {
  return axios.post(`${API_BASE_URL}/register`, userData);
};

export const fetchUsers = async () => {
  return axios.get(API_BASE_URL);
};
