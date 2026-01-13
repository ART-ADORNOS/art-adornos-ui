import {RESOURCES} from "../../../core/constants/api/resources";
import {ACTIONS} from "../../../core/constants/api/actions";
import {BASE_URLS} from "../../../core/constants/api/baseUrls";

export const ORDER_ENDPOINTS = {
    REGISTER_ORDER: `${BASE_URLS}${RESOURCES.ORDER}${ACTIONS.REGISTER}`,
    GET_ORDERS: `${BASE_URLS}${RESOURCES.ORDER}${ACTIONS.LIST}`,
    GET_ORDER_DETAIL: `${BASE_URLS}${RESOURCES.ORDER}${ACTIONS.DETAIL}`,
}