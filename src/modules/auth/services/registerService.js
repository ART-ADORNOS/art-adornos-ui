import accountsApi from '../../../core/api/accountsApi'
import {BASE_URLS_USER} from "../../../core/constants/user/urlsUser";

const registerUser = async (formData) => {
    await accountsApi.post(BASE_URLS_USER.REGISTER_USER, formData);
};

export default registerUser;