let STARTUP = 'startups/';
let API_URL = 'api/';
let DELETE_URL = 'delete/';
let UPDATE_URL = 'update/';
export const BASE_URLS_STARTUP ={
    GET_STARTUP: `${API_URL}${STARTUP}list/`,

    REGISTER_STARTUP: `${STARTUP}register/`,
    UPDATE_STARTUP: `${API_URL}${STARTUP}${UPDATE_URL}`,
    DELETE_STARTUP: `${API_URL}${STARTUP}${DELETE_URL}`,
}