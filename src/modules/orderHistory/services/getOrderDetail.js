import storeApi from "../../../core/api/storeApi";
import {BASE_URLS_ORDER} from "../constants/urlsOrder";


export const getOrderDetail = async (orderId) => {
    try {
        return await storeApi.get(`${BASE_URLS_ORDER.GET_ORDER_DETAIL}${orderId}/`);
    } catch (error) {
        throw error
    }
}