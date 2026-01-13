import createAxiosClient from './clients/axiosClient';
import {BASE_URL_ACCOUNTS} from '../constants/api/baseUrls';

const accountsApi = createAxiosClient({
  baseURL: BASE_URL_ACCOUNTS,
});

export default accountsApi;
