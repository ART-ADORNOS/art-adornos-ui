import storeApi from "../../../core/api/storeApi";
import {BASE_URLS_PRODUCT} from "../constants/urlsProduct";


const updateProductService = async (ProductId, formData) => {
    try {
        return (await storeApi.put(`${BASE_URLS_PRODUCT.UPDATE_PRODUCT}${ProductId}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })).data;
    } catch (error) {
        throw error;
    }

}

export default updateProductService;