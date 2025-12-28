import axios from 'axios';

const getToken = () => localStorage.getItem('token');

const createAxiosClient = ({ baseURL, headers = {} }) => {
  const instance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  return instance;
};

export default createAxiosClient;
