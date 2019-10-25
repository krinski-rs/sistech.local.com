import * as types from '../actions/types';

const initialState = {
    services: {},
    service: null,
    error: null,
    send: false
};

export default function serviceReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCHING_SERVICE:
            state = Object.assign({}, state, { services: {}, error: {}, send: true });
            break;
        case types.FETCHING_SERVICE_SUCCESS:
            state = Object.assign({}, state, { services: action.services, error: {}, send: false });
            break;
        case types.FETCHING_SERVICE_FAILURE:
            state = Object.assign({}, { services: {}, error: action.error, send: false });
            break;
        case types.SAVE_SERVICE:
            state = Object.assign({}, state, { service: null, error: {}, send: true });
            break;
        case types.SAVE_SERVICE_SUCCESS:
            state = Object.assign({}, state, { service: action.service, error: {}, send: false });
            break;
        case types.SAVE_SERVICE_FAILURE:
            state = Object.assign({}, { service: null, error: action.error, send: false });
            break;
        case types.SAVE_SERVICE_RESET:
            state = Object.assign({}, state, { service: null, error: {}, send: false });
            break;
        default:
            break;
    }
    return state;
}