let STARTUP = 'startups/';
let API_URL = 'api/';
let DELETE_URL = 'delete/';
let UPDATE_URL = 'update/';
let INDUSTRY_URL = 'industry-choices/';
export const BASE_URLS_STARTUP ={
    GET_STARTUP: `${API_URL}${STARTUP}list/`,
    GET_INDUSTRY: `${API_URL}${INDUSTRY_URL}`,

    REGISTER_STARTUP: `${STARTUP}register/`,
    UPDATE_STARTUP: `${API_URL}${STARTUP}${UPDATE_URL}`,
    DELETE_STARTUP: `${API_URL}${STARTUP}${DELETE_URL}`,
}