import {BASE_URLS_STARTUP_API} from "../../../../core/constants/user/urlsStartup";
import apiStore from "../../../../core/api/ApiStore";


export const getStartupService = async () => {
    const response = await apiStore.get(BASE_URLS_STARTUP_API.GET_ALL_STARTUPS);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Error al cargar la información de la startup');
    }

}