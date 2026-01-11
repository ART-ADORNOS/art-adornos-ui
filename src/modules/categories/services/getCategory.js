import storeApi from "../../../core/api/storeApi";
import {CATEGORY_ENDPOINT} from "../constants/endpoints";


export const getCategory = async (startupId) => {
    const response = await storeApi.get(`${CATEGORY_ENDPOINT.GET_CATEGORY}${startupId}`);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Error al cargar la información de la categoría');
    }
}