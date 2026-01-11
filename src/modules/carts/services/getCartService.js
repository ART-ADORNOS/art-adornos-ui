import storeApi from '../../../core/api/storeApi';
import {CART_ENDPOINTS} from "../constants/endpoints";

export const getCartService = async () => {
  const response = await storeApi.get(CART_ENDPOINTS.GET_CART);

  if (response.status === 200) {
    return response.data;
  }

  throw new Error('Error al obtener carrito');
};
