export const API_HOST =
    process.env.REACT_APP_API_HOST || 'http://localhost:8000';

export const BASE_URLS = Object.freeze({
    ACCOUNTS: `${API_HOST}/accounts`,
    STORE: `${API_HOST}/store`,
});
