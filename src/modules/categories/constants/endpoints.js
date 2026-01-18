import {RESOURCES} from "../../../core/constants/api/resources";
import {ACTIONS} from "../../../core/constants/api/actions";
import {BASE_URLS} from "../../../core/constants/api/baseUrls";


export const CATEGORY_ENDPOINT = {
    REGISTER_CATEGORY: `${BASE_URLS.STORE}${RESOURCES.CATEGORY}${ACTIONS.REGISTER}`,
    GET_CATEGORY: `${BASE_URLS.STORE}${RESOURCES.CATEGORY}${ACTIONS.LIST}`,
    UPDATE_CATEGORY: `${BASE_URLS.STORE}${RESOURCES.CATEGORY}${ACTIONS.UPDATE}`,
    DELETE_CATEGORY: `${BASE_URLS.STORE}${RESOURCES.CATEGORY}${ACTIONS.DELETE}`,
};