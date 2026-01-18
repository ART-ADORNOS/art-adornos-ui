// src/shared/reducers/uiReducer.js

export const MODALS = {
    DELETE_USER: 'deleteUser',
    NOTIFICATION: 'notification',
};

export const UI_ACTIONS = {
    OPEN_MODAL: 'OPEN_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL',
    TOGGLE_DROPDOWN: 'TOGGLE_DROPDOWN',
    SHOW_ALERT: 'SHOW_ALERT',
    HIDE_ALERT: 'HIDE_ALERT',
};

export const initialUIState = {
    modal: null, // MODALS.*
    dropdownOpen: false,
    alert: {
        visible: false,
        message: '',
        type: 'success',
    },
};

export function uiReducer(state, action) {
    switch (action.type) {
        case UI_ACTIONS.OPEN_MODAL:
            return {
                ...state,
                modal: action.payload,
            };

        case UI_ACTIONS.CLOSE_MODAL:
            return {
                ...state,
                modal: null,
            };

        case UI_ACTIONS.TOGGLE_DROPDOWN:
            return {
                ...state,
                dropdownOpen: !state.dropdownOpen,
            };

        case UI_ACTIONS.SHOW_ALERT:
            return {
                ...state,
                alert: {
                    visible: true,
                    message: action.payload.message,
                    type: action.payload.type || 'success',
                },
            };

        case UI_ACTIONS.HIDE_ALERT:
            return {
                ...state,
                alert: {...state.alert, visible: false},
            };

        default:
            return state;
    }
}
