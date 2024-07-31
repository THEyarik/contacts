import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: '/api/v1',
  headers: {
    Authorization: 'Bearer VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn'
  }
});

export default axiosConfig;