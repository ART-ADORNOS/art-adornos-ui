import storeApi from "../../../core/api/storeApi";
import {BASE_URLS_PRODUCT} from "../constants/urlsProduct";


const registerProductService = async (formData) => {
    try{
        return (await storeApi.post(`${BASE_URLS_PRODUCT.REGISTER_PRODUCT}`, formData,{
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })).data;
    }catch(err){
        throw err;
    }
}

export default registerProductService;