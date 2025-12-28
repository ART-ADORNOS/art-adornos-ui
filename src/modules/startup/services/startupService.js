import storeApi from "../../../core/api/storeApi";
import {BASE_URLS_STARTUP} from "../../../core/constants/startup/urlsStartup";

const registerStartupService  = async (formData) => {
    try {
        await storeApi.post(BASE_URLS_STARTUP.REGISTER_STARTUP, formData);
    } catch (err) {
        throw err;
    }
};

export default registerStartupService ;
