import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
});

// ip 192.168.0.10
// 10.0.2.2

export default api;
