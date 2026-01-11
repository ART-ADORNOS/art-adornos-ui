import storeApi from "../../../core/api/storeApi";
import {BASE_URLS_CATEGORY} from "../../../core/constants/category/urlsCategory";


const updateCategoryService = async (categoryId, formData) => {
    try {
        const response = await storeApi.put(`${BASE_URLS_CATEGORY.UPDATE_CATEGORY}${categoryId}`, formData);
        return response.data;
    } catch (error) {
        throw new Error("Error al actualizar la categoría. Intente nuevamente más tarde.");
    }

}

export default updateCategoryService;