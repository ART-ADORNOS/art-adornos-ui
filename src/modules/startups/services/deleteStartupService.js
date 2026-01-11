import storeApi from "../../../core/api/storeApi";
import {BASE_URLS_STARTUP} from "../constants/urlsStartup";


const deleteStartupService = async (startupId) => {
    try {
        return await storeApi.delete(`${BASE_URLS_STARTUP.DELETE_STARTUP}${startupId}/`);
    } catch (err) {
        throw err;
    }
}

export default deleteStartupService;