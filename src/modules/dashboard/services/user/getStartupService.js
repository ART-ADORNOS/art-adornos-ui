import storeApi from "../../../../core/api/storeApi";
import {BASE_URLS_STARTUP as BASE_URLS_STARTUP_API} from "../../../startups/constants/urlsStartup";


export const getStartupService = async () => {
    const response = await storeApi.get(BASE_URLS_STARTUP_API.GET_ALL_STARTUPS);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Error al cargar la información de la startup');
    }

}