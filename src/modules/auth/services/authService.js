import accountsApi from '../../../core/api/accountsApi';
import {BASE_URLS_AUTH} from "../../../core/constants/auth/urlsAuth";

export const loginRequest = async (username, password) => {
  const { data } = await accountsApi.post(BASE_URLS_AUTH.LOGIN, {
    username,
    password,
  });
  return data?.access;
};

export const getCurrentUser = async () => {
  const { data } = await accountsApi.get(BASE_URLS_AUTH.CURRENT_USER);
  return data;
};
