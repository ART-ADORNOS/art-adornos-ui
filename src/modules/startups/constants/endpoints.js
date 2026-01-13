import {RESOURCES} from "../../../core/constants/api/resources";
import {ACTIONS} from "../../../core/constants/api/actions";
import {BASE_URLS} from "../../../core/constants/api/baseUrls";

let ICONS = "icons/"
let GET_ALL_STARTUPS = 'all-startups/';

export const STARTUP_ENDPOINTS = {
    GET_STARTUP: `${BASE_URLS}${RESOURCES.STARTUP}${ACTIONS.LIST}`,
    REGISTER_STARTUP: `${BASE_URLS}${RESOURCES.STARTUP}${ACTIONS.REGISTER}`,
    UPDATE_STARTUP: `${BASE_URLS}${RESOURCES.STARTUP}${ACTIONS.UPDATE}`,
    DELETE_STARTUP: `${BASE_URLS}${RESOURCES.STARTUP}${ACTIONS.DELETE}`,
    STARTUP_ICONS: `${BASE_URLS}${RESOURCES.STARTUP}${ICONS}`,
    GET_ALL_STARTUPS: `${BASE_URLS}${RESOURCES.STARTUP}${GET_ALL_STARTUPS}`,
}