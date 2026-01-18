import createAxiosClient from './clients/axiosClient';
import {BASE_URLS} from "../constants/api/baseUrls";

const accountsApi = createAxiosClient({
    baseURL: BASE_URLS.ACCOUNTS,
});

export default accountsApi;
