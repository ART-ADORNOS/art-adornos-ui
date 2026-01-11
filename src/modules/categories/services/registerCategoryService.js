import {BASE_URLS_CATEGORY} from "../../../core/constants/category/urlsCategory";
import storeApi from "../../../core/api/storeApi";


const registerCategoryService = async (formData) => {
    try {
        await storeApi.post(BASE_URLS_CATEGORY.REGISTER_CATEGORY, formData);
    } catch (err) {
        throw new Error("Error al registrar la categoría. Intente nuevamente más tarde.");
    }
}

export default registerCategoryService;