import storeApi from "../../../core/api/storeApi";
import {CATEGORY_ENDPOINT} from "../constants/endpoints";


const updateCategoryService = async (categoryId, formData) => {
    try {
        const response = await storeApi.put(`${CATEGORY_ENDPOINT.UPDATE_CATEGORY}${categoryId}`, formData);
        return response.data;
    } catch (error) {
        throw new Error("Error al actualizar la categoría. Intente nuevamente más tarde.");
    }

}

export default updateCategoryService;