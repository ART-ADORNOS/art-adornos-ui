import createAxiosClient from './axiosClient';
import {BASE_URL_ACCOUNTS} from '../constants/urls';

const accountsApi = createAxiosClient({
  baseURL: BASE_URL_ACCOUNTS,
});

export default accountsApi;
