import storeApi from "../../../core/api/storeApi";
import {PRODUCT_ENDPOINTS} from "../constants/endpoints";


const deleteProductService =async (ProductId) => {
    try{
        const response = await storeApi.delete(`${PRODUCT_ENDPOINTS.DELETE_PRODUCT}${ProductId}`);
        if (response.status === 200) {
            return response.data;
        }
    }catch(err){
        throw err;
    }
}

export default deleteProductService;