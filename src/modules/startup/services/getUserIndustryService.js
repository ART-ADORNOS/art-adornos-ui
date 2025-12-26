import apiStore from "../../../core/api/ApiStore";
import {BASE_URLS_INDUSTRY} from "../../../core/constants/industry/urlsIndustry";


export const getUserIndustry = async () => {
    const response = await apiStore.get(BASE_URLS_INDUSTRY.GET_USER_INDUSTRY);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Error al cargar la información de la industria');
    }
}