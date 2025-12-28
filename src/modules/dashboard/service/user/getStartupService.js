import {BASE_URLS_STARTUP_API} from "../../../../core/constants/user/urlsStartup";
import storeApi from "../../../../core/api/storeApi";


export const getStartupService = async () => {
    const response = await storeApi.get(BASE_URLS_STARTUP_API.GET_ALL_STARTUPS);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Error al cargar la información de la startup');
    }

}