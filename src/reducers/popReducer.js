import * as types from '../actions/types';

const initialState = {
    pops: {},
    pop: null,
    error: null,
    send: false
};

export default function popReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCHING_POP:
            state = Object.assign({}, state, { pops: {}, error: {}, send: true });
            break;
        case types.FETCHING_POP_SUCCESS:
            state = Object.assign({}, state, { pops: action.pops, error: {}, send: false });
            break;
        case types.FETCHING_POP_FAILURE:
            state = Object.assign({}, { pops: {}, error: action.error, send: false });
            break;
        case types.SAVE_POP:
            state = Object.assign({}, state, { pop: null, error: {}, send: true });
            break;
        case types.SAVE_POP_SUCCESS:
            state = Object.assign({}, state, { pop: action.pop, error: {}, send: false });
            break;
        case types.SAVE_POP_FAILURE:
            state = Object.assign({}, { pop: null, error: action.error, send: false });
            break;
        case types.SAVE_POP_RESET:
            state = Object.assign({}, state, { pop: null, error: {}, send: false });
            break;
        default:
            break;
    }
    return state;
}