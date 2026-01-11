import storeApi from "../../../core/api/storeApi";
import {BASE_URLS_CATEGORY} from "../constants/urlsCategory";


const deleteCategoryService = async (categoryId) => {
    try {
        const response = await storeApi.delete(`${BASE_URLS_CATEGORY.DELETE_CATEGORY}${categoryId}`);
        if (response.status === 200) {
            return response.data;
        }
    } catch {
        throw new Error("Failed to delete category. Please try again later.");
    }
}

export default deleteCategoryService;