import storeApi from "../../../core/api/storeApi";
import {CART_ENDPOINTS} from "../constants/endpoints";


const deleteProductCartService = async (productId) => {
    try {
        const response = await storeApi.delete(`${CART_ENDPOINTS.DELETE_CART_PRODUCT}${productId}`);
        if (response.status === 200) {
            return response.data;
        }
    } catch {
        throw new Error("Failed to delete product from cart. Please try again later.");
    }
}

export default deleteProductCartService;