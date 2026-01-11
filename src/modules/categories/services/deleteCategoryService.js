import storeApi from "../../../core/api/storeApi";
import {CATEGORY_ENDPOINT} from "../constants/endpoints";


const deleteCategoryService = async (categoryId) => {
    try {
        const response = await storeApi.delete(`${CATEGORY_ENDPOINT.DELETE_CATEGORY}${categoryId}`);
        if (response.status === 200) {
            return response.data;
        }
    } catch {
        throw new Error("Failed to delete category. Please try again later.");
    }
}

export default deleteCategoryService;