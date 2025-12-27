import api from '../../../core/api/axios'
import {BASE_URLS_USER} from "../../../core/constants/user/urlsUser";

const registerUser = async (formData) => {
    await api.post(BASE_URLS_USER.REGISTER_USER, formData);
};

export default registerUser;