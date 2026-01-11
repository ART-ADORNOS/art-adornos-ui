import storeApi from "../../../core/api/storeApi";
import {ORDER_ENDPOINTS} from "../constants/endpoints";


export const getOrder = async () => {
    try {
        return await storeApi.get(`${ORDER_ENDPOINTS.GET_ORDERS}`);
    } catch (error) {
        throw error
    }
}