import accountsApi from '../../../core/api/accountsApi';

export const loginRequest = async (username, password) => {
  const { data } = await accountsApi.post('/api/token/', {
    username,
    password,
  });
  return data?.access;
};

export const getCurrentUser = async () => {
  const { data } = await accountsApi.get('/api/me/');
  return data;
};
