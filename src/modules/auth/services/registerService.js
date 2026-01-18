import accountsApi from '../../../core/api/accountsApi'
import {USER_ENDPOINTS} from "../constants/user/endpoints";

const registerUser = async (formData) => {
    await accountsApi.post(USER_ENDPOINTS.REGISTER_USER, formData);
};

export default registerUser;