import createAxiosClient from './clients/axiosClient';
import {BASE_URL_STORE} from '../constants/api/baseUrls';

const storeApi = createAxiosClient({
  baseURL: BASE_URL_STORE,
});

export default storeApi;
