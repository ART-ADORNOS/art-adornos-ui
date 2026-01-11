import storeApi from "../../../core/api/storeApi";
import {STARTUP_ENDPOINTS} from "../constants/endpoints";


const updateStartupService = async (startupId, formData) => {
    try {
        const response = await storeApi.put(`${STARTUP_ENDPOINTS.UPDATE_STARTUP}${startupId}/`, formData);
        return response.data;
    } catch (error) {
        throw error;
    }

}

export default updateStartupService;