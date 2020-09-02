import axios from 'axios';

const host = '';

export const http = axios.create({
  baseURL: `${host}/api`
});
