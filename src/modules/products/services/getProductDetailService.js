import storeApi from "../../../core/api/storeApi";
import {PRODUCT_ENDPOINTS} from "../constants/endpoints";


const getProductDetailService = async (productId) => {
    try {
        const response = await storeApi.get(`${PRODUCT_ENDPOINTS.DETAIL_PRODUCT}${productId}`);
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        throw new error(`Error al obtener los detalles del producto`);
    }
}

export default getProductDetailService;