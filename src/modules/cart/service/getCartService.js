import storeApi from '../../../core/api/storeApi';
import {BASE_URLS_CART} from "../../../core/constants/carts/urlsCarts";

export const getCartService = async () => {
  const response = await storeApi.get(BASE_URLS_CART.GET_CART);

  if (response.status === 200) {
    return response.data;
  }

  throw new Error('Error al obtener carrito');
};
