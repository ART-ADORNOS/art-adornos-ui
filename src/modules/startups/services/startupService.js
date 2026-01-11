import storeApi from "../../../core/api/storeApi";
import {STARTUP_ENDPOINTS} from "../constants/endpoints";

const registerStartupService  = async (formData) => {
    try {
        await storeApi.post(STARTUP_ENDPOINTS.REGISTER_STARTUP, formData);
    } catch (err) {
        throw err;
    }
};

export default registerStartupService ;
