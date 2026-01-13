import storeApi from "../../../core/api/storeApi";
import {ORDER_ENDPOINTS} from "../constants/endpoints";


const registerOrderService = async (order) => {
    const response = await storeApi.post(ORDER_ENDPOINTS.REGISTER_ORDER, order);
    if (response.status === 201) {
        return response.data;
    } else {
        throw new Error(`Failed to register order: ${response.status} ${response.statusText || ''}`);
    }
}

export default registerOrderService;