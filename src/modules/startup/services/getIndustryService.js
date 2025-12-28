import storeApi from "../../../core/api/storeApi";
import {BASE_URLS_INDUSTRY} from "../../../core/constants/industry/urlsIndustry";


export const getIndustry = async () => {
    const response = await storeApi.get(BASE_URLS_INDUSTRY.GET_INDUSTRY);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Error al cargar la información de la industria');
    }
}