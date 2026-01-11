import storeApi from "../../../core/api/storeApi";
import {ORDER_ENDPOINTS} from "../constants/endpoints";


export const getOrderDetail = async (orderId) => {
    try {
        return await storeApi.get(`${ORDER_ENDPOINTS.GET_ORDER_DETAIL}${orderId}/`);
    } catch (error) {
        throw error
    }
}