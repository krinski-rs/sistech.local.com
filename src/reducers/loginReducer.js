import * as types from '../actions/types';

const initialState = {
    user: null,
    error: {},
    send: false
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_USER:
            state = Object.assign({}, state, { user: null, error: {}, send: true });
            break;
        case types.LOGIN_USER_SUCCESS:
            state = Object.assign({}, state, { user: action.user, error: {}, send: false });
            break;
        case types.LOGIN_USER_FAILURE:
            state = Object.assign({}, { user: null, error: action.error, send: false });
            break;
        default:
            break;
    }
    return state;
}