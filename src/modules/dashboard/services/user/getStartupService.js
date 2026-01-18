import storeApi from "../../../../core/api/storeApi";
import {STARTUP_ENDPOINTS} from "../../../startups/constants/endpoints";


export const getStartupService = async () => {
    const response = await storeApi.get(STARTUP_ENDPOINTS.GET_ALL_STARTUPS);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Error al cargar la información de la startup');
    }

}