import storeApi from "../../../core/api/storeApi";
import {CATEGORY_ENDPOINT} from "../constants/endpoints";


const registerCategoryService = async (formData) => {
    try {
        await storeApi.post(CATEGORY_ENDPOINT.REGISTER_CATEGORY, formData);
    } catch (err) {
        throw new Error("Error al registrar la categoría. Intente nuevamente más tarde.");
    }
}

export default registerCategoryService;