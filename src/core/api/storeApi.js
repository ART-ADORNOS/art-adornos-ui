import createAxiosClient from './axiosClient';
import {BASE_URL_STORE} from '../constants/urls';

const storeApi = createAxiosClient({
  baseURL: BASE_URL_STORE,
});

export default storeApi;
