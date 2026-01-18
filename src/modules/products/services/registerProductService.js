import storeApi from "../../../core/api/storeApi";
import {PRODUCT_ENDPOINTS} from "../constants/endpoints";


const registerProductService = async (formData) => {
    try {
        return (await storeApi.post(`${PRODUCT_ENDPOINTS.REGISTER_PRODUCT}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })).data;
    } catch (err) {
        throw err;
    }
}

export default registerProductService;