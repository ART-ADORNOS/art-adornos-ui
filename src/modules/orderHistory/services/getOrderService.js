import storeApi from "../../../core/api/storeApi";
import {BASE_URLS_ORDER} from "../constants/urlsOrder";


export const getOrder = async () => {
    try {
        return await storeApi.get(`${BASE_URLS_ORDER.GET_ORDERS}`);
    } catch (error) {
        throw error
    }
}