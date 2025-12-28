import storeApi from "../../../core/api/storeApi";
import {BASE_URLS_CART} from "../../../core/constants/carts/urlsCarts";


export const getCart = async () => {
    const response = await storeApi(`${BASE_URLS_CART.GET_CART}`);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Error al cargar la información del carrito');
    }
};