import storeApi from "../../../core/api/storeApi";
import {BASE_URLS_CART} from "../../../core/constants/carts/urlsCarts";

const registerCartService = async (formData) => {
    const response = await storeApi.post(BASE_URLS_CART.REGISTER_CART, formData);
    if (response.status === 200) return response.data;

}

export default registerCartService;