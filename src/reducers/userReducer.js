import * as types from '../actions/types';

const initialState = {
    users: [],
    user: null,
    error: null,
    send: false
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCHING_USERS:
            state = Object.assign({}, state, { users: [], error: {}, send: true });
            break;
        case types.FETCHING_USERS_SUCCESS:
            state = Object.assign({}, state, { users: action.users, error: {}, send: false });
            break;
        case types.FETCHING_USERS_FAILURE:
            state = Object.assign({}, { users: [], error: action.error, send: false });
            break;
        case types.SAVE_USERS:
            state = Object.assign({}, state, { user: null, error: {}, send: true });
            break;
        case types.SAVE_USER_SUCCESS:
            state = Object.assign({}, state, { user: action.user, error: {}, send: false });
            break;
        case types.SAVE_USER_FAILURE:
            state = Object.assign({}, { user: null, error: action.error, send: false });
            break;
        default:
            break;
    }
    return state;
}