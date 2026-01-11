import storeApi from "../../../core/api/storeApi";
import {BASE_URLS_CATEGORY} from "../constants/urlsCategory";


export const getCategory = async (startupId) => {
    const response = await storeApi.get(`${BASE_URLS_CATEGORY.GET_CATEGORY}${startupId}`);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Error al cargar la información de la categoría');
    }
}