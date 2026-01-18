import {RESOURCES} from "../../../../core/constants/api/resources";
import {ACTIONS} from "../../../../core/constants/api/actions";
import {BASE_URLS} from "../../../../core/constants/api/baseUrls";


export const INDUSTRY_ENDPOINTS = {
    GET_INDUSTRY: `${BASE_URLS.STORE}${RESOURCES.INDUSTRY}${ACTIONS.LIST}`,
    GET_USER_INDUSTRY: `${BASE_URLS.STORE}${RESOURCES.INDUSTRY}${ACTIONS.USER_INDUSTRY}`,
}