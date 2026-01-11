import storeApi from "../../../core/api/storeApi";
import {BASE_URLS_STARTUP} from "../constants/urlsStartup";


const updateStartupService = async (startupId, formData) => {
    try {
        const response = await storeApi.put(`${BASE_URLS_STARTUP.UPDATE_STARTUP}${startupId}/`, formData);
        return response.data;
    } catch (error) {
        throw error;
    }

}

export default updateStartupService;