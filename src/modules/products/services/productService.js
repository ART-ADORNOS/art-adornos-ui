import storeApi from "../../../core/api/storeApi";
import {BASE_URLS_PRODUCT} from "../../../core/constants/product/urlsProduct";


const getProducts = async (startupId) => {
    try {
        const response = await storeApi.get(`${BASE_URLS_PRODUCT.GET_PRODUCT}${startupId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default getProducts;