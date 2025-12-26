import apiStore from "../../../core/api/ApiStore";
import {BASE_URLS_STARTUP} from "../../../core/constants/startup/urlsStartup";


const updateStartupService = async (startupId, formData) => {
    try {
        const response = await apiStore.put(`${BASE_URLS_STARTUP.UPDATE_STARTUP}${startupId}/`, formData);
        return response.data;
    } catch (error) {
        throw error;
    }

}

export default updateStartupService;