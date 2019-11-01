import * as types from '../actions/types';

const initialState = {
    switchss: {},
    switchs: null,
    error: null,
    send: false
};

export default function switchsReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCHING_SWITCHS:
            state = Object.assign({}, state, { switchss: {}, error: {}, send: true });
            break;
        case types.GET_SWITCHS:
            state = Object.assign({}, state, { switchs: {}, error: {}, send: true });
            break;
        case types.FETCHING_SWITCHS_SUCCESS:
            state = Object.assign({}, state, { switchss: action.switchss, error: {}, send: false });
            break;
        case types.GET_SWITCHS_SUCCESS:
            state = Object.assign({}, state, { switchs: action.switchs, error: {}, send: false });
            break;
        case types.FETCHING_SWITCHS_FAILURE:
            state = Object.assign({}, { switchss: {}, error: action.error, send: false });
            break;
        case types.GET_SWITCHS_FAILURE:
            state = Object.assign({}, { switchs: {}, error: action.error, send: false });
            break;
        case types.SAVE_SWITCHS:
            state = Object.assign({}, state, { switchs: null, error: {}, send: true });
            break;
        case types.SAVE_SWITCHS_SUCCESS:
            state = Object.assign({}, state, { switchs: action.switchs, error: {}, send: false });
            break;
        case types.SAVE_SWITCHS_FAILURE:
            state = Object.assign({}, { switchs: null, error: action.error, send: false });
            break;
        case types.SAVE_SWITCHS_RESET:
            state = Object.assign({}, state, { switchs: null, error: {}, send: false });
            break;
        default:
            break;
    }
    return state;
}