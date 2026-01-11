import storeApi from "../../../core/api/storeApi";
import {BASE_URLS_ORDER} from "../constants/urlsOrder";


const registerOrderService = async (order) => {
    const response = await storeApi.post(BASE_URLS_ORDER.REGISTER_ORDER, order);
    if (response.status === 201) {
        return response.data;
    } else {
        throw new Error(`Failed to register order: ${response.status} ${response.statusText || ''}`);
    }
}

export default registerOrderService;