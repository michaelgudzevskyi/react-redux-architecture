import axios from 'axios';

const access_token = localStorage.getItem('access_token');

const api = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  baseURL: process.env.REACT_APP_API_URL,
});

function successHandler(response) {
  return response;
}

function errorHandler(error) {
  if (error.response.status == 401) {
    if (access_token) {
      // refreshToken();
    } else {
      window.location.href = '/acessar';
    }
  }
  return Promise.reject(error);
}

api.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error),
);

export default api;
