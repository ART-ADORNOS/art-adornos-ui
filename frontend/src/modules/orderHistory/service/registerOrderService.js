import apiStore from "../../../core/api/ApiStore";
import {BASE_URLS_ORDER} from "../../../core/constants/order/urlsOrder";


const registerOrderService = async (order) => {
    const response = await apiStore.post(BASE_URLS_ORDER.REGISTER_ORDER, order);
    if (response.status === 200) return response.data;
}

export default registerOrderService;