import createAxiosClient from './clients/axiosClient';
import {BASE_URLS} from "../constants/api/baseUrls";

const storeApi = createAxiosClient({
    baseURL: BASE_URLS.STORE,
});

export default storeApi;
