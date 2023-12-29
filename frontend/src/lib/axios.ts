import axios from 'axios';

export const url = 'https://wp1121-final.onrender.com/api';

const instance = axios.create({
  baseURL: url,
  withCredentials: true,
});

export default instance;
