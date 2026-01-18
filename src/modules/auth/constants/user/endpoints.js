import {RESOURCES} from "../../../../core/constants/api/resources";
import {ACTIONS} from "../../../../core/constants/api/actions";
import {BASE_URLS} from "../../../../core/constants/api/baseUrls";


export const USER_ENDPOINTS = {
    REGISTER_USER: `${BASE_URLS.ACCOUNTS}${RESOURCES.USER}${ACTIONS.REGISTER}`,
    UPDATE_USER: `${BASE_URLS.ACCOUNTS}${RESOURCES.USER}${ACTIONS.UPDATE}`,
    DELETE_USER: `${BASE_URLS.ACCOUNTS}${RESOURCES.USER}${ACTIONS.DELETE}`,
}