import {BASE_URLS_USER} from "../constants/urlsUser";
import api from "../../../core/api/accountsApi";


export const deleteAccountService = async () => {
    try {
        return await api.delete(BASE_URLS_USER.DELETE_USER)
    } catch (error) {
        throw error
    }
}