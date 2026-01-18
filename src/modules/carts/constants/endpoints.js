import {RESOURCES} from "../../../core/constants/api/resources";
import {ACTIONS} from "../../../core/constants/api/actions";
import {BASE_URLS} from "../../../core/constants/api/baseUrls";
import {EXTRA_PATHS} from "../../../core/constants/api/extraPaths";


export const CART_ENDPOINTS = {
    GET_CART: `${BASE_URLS.STORE}${RESOURCES.CART}${ACTIONS.LIST}`,
    REGISTER_CART: `${BASE_URLS.STORE}${RESOURCES.CART}${ACTIONS.REGISTER}`,
    UPDATE_CART: `${BASE_URLS.STORE}${RESOURCES.CART}${ACTIONS.UPDATE}`,
    DELETE_CART: `${BASE_URLS.STORE}${RESOURCES.CART}${ACTIONS.DELETE}`,
    DELETE_CART_PRODUCT: `${BASE_URLS.STORE}${RESOURCES.CART}${EXTRA_PATHS.DELETE_CART_PRODUCT}`,
};