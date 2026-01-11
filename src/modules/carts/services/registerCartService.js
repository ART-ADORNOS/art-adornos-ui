import storeApi from "../../../core/api/storeApi";
import {CART_ENDPOINTS} from "../constants/endpoints";

const registerCartService = async (formData) => {
    const response = await storeApi.post(CART_ENDPOINTS.REGISTER_CART, formData);
    if (response.status === 200) return response.data;

}

export default registerCartService;