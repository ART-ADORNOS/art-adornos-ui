import storeApi from "../../../core/api/storeApi";
import {BASE_URLS_PRODUCT} from "../constants/urlsProduct";


const deleteProductService =async (ProductId) => {
    try{
        const response = await storeApi.delete(`${BASE_URLS_PRODUCT.DELETE_PRODUCT}${ProductId}`);
        if (response.status === 200) {
            return response.data;
        }
    }catch(err){
        throw err;
    }
}

export default deleteProductService;