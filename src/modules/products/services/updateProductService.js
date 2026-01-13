import storeApi from "../../../core/api/storeApi";
import {PRODUCT_ENDPOINTS} from "../constants/endpoints";


const updateProductService = async (ProductId, formData) => {
    try {
        return (await storeApi.put(`${PRODUCT_ENDPOINTS.UPDATE_PRODUCT}${ProductId}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })).data;
    } catch (error) {
        throw error;
    }

}

export default updateProductService;