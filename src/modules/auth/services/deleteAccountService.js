import api from "../../../core/api/accountsApi";
import {USER_ENDPOINTS} from "../constants/user/endpoints";


export const deleteAccountService = async () => {
    try {
        return await api.delete(USER_ENDPOINTS.DELETE_USER)
    } catch (error) {
        throw error
    }
}