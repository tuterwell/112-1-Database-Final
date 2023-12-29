import axios from 'axios';

export const url = 'https://112-1-database-final-jygy.vercel.app:8080/api';

const instance = axios.create({
  baseURL: url,
  withCredentials: true,
});

export default instance;
