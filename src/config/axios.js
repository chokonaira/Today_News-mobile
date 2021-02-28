import axios from 'axios';

export const axiosConfig = axios.create({
  baseURL: 'https://newsapi.org/v2/top-headlines',
});
