import {RESOURCES} from "../../../core/constants/api/resources";
import {ACTIONS} from "../../../core/constants/api/actions";
import {BASE_URLS} from "../../../core/constants/api/baseUrls";


export const PRODUCT_ENDPOINTS = {
    REGISTER_PRODUCT: `${BASE_URLS}${RESOURCES.PRODUCT}${ACTIONS.REGISTER}`,
    GET_PRODUCT: `${BASE_URLS}${RESOURCES.PRODUCT}${ACTIONS.LIST}`,
    DELETE_PRODUCT: `${BASE_URLS}${RESOURCES.PRODUCT}${ACTIONS.DELETE}`,
    UPDATE_PRODUCT: `${BASE_URLS}${RESOURCES.PRODUCT}${ACTIONS.UPDATE}`,
    DETAIL_PRODUCT: `${BASE_URLS}${RESOURCES.PRODUCT}${ACTIONS.DETAIL}`,
}