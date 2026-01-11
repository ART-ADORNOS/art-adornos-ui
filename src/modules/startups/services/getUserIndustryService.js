import storeApi from "../../../core/api/storeApi";
import {BASE_URLS_INDUSTRY} from "../constants/urlsIndustry";


export const getUserIndustry = async () => {
    const response = await storeApi.get(BASE_URLS_INDUSTRY.GET_USER_INDUSTRY);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Error al cargar la información de la industria');
    }
}