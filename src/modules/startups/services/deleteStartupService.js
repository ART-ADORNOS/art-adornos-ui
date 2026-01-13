import storeApi from "../../../core/api/storeApi";
import {STARTUP_ENDPOINTS} from "../constants/endpoints";


const deleteStartupService = async (startupId) => {
    try {
        return await storeApi.delete(`${STARTUP_ENDPOINTS.DELETE_STARTUP}${startupId}/`);
    } catch (err) {
        throw err;
    }
}

export default deleteStartupService;