import storeApi from "../../../core/api/storeApi";
import {BASE_URLS_CART} from "../../../core/constants/carts/urlsCarts";


const deleteProductCartService = async (productId) => {
    try {
        const response = await storeApi.delete(`${BASE_URLS_CART.DELETE_CART_PRODUCT}${productId}`);
        if (response.status === 200) {
            return response.data;
        }
    } catch{
        throw new Error("Failed to delete product from cart. Please try again later.");
    }
}

export default deleteProductCartService;