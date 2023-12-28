import axios from 'axios';

export const url =
  process.env.NODE_ENV === 'production'
    ? 'https://api.example.com'
    : 'https://112-1-database-final-jygy.vercel.app/api';

const instance = axios.create({
  baseURL: url,
  withCredentials: true,
});

export default instance;
