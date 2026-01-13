import storeApi from "../../../core/api/storeApi";
import {PRODUCT_ENDPOINTS} from "../constants/endpoints";


const getProducts = async (startupId) => {
    try {
        const response = await storeApi.get(`${PRODUCT_ENDPOINTS.GET_PRODUCT}${startupId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default getProducts;