import accountsApi from '../../../core/api/accountsApi';
import {AUTH_ENDPOINTS} from "../constants/auth/endpoints";

export const loginRequest = async (username, password) => {
    const {data} = await accountsApi.post(AUTH_ENDPOINTS.LOGIN, {username, password});
    return data?.access;
};

export const getCurrentUser = async () => {
    const {data} = await accountsApi.get(AUTH_ENDPOINTS.CURRENT_USER);
    return data;
};
