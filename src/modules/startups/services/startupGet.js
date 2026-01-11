import storeApi from "../../../core/api/storeApi";
import {STARTUP_ENDPOINTS} from "../constants/endpoints";

export const getStartup = async () => {
    const response = await storeApi.get(STARTUP_ENDPOINTS.GET_STARTUP);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Error al cargar la información de la startup');
    }

}