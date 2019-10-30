import * as types from '../actions/types';

const initialState = {
    switchmodels: {},
    switchmodel: null,
    error: null,
    send: false
};

export default function switchmodelReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCHING_SWITCHMODEL:
            state = Object.assign({}, state, { switchmodels: {}, error: {}, send: true });
            break;
        case types.GET_SWITCHMODEL:
            state = Object.assign({}, state, { switchmodel: {}, error: {}, send: true });
            break;
        case types.FETCHING_SWITCHMODEL_SUCCESS:
            state = Object.assign({}, state, { switchmodels: action.switchmodels, error: {}, send: false });
            break;
        case types.GET_SWITCHMODEL_SUCCESS:
            state = Object.assign({}, state, { switchmodel: action.switchmodel, error: {}, send: false });
            break;
        case types.FETCHING_SWITCHMODEL_FAILURE:
            state = Object.assign({}, { switchmodels: {}, error: action.error, send: false });
            break;
        case types.GET_SWITCHMODEL_FAILURE:
            state = Object.assign({}, { switchmodel: {}, error: action.error, send: false });
            break;
        case types.SAVE_SWITCHMODEL:
            state = Object.assign({}, state, { switchmodel: null, error: {}, send: true });
            break;
        case types.SAVE_SWITCHMODEL_SUCCESS:
            state = Object.assign({}, state, { switchmodel: action.switchmodel, error: {}, send: false });
            break;
        case types.SAVE_SWITCHMODEL_FAILURE:
            state = Object.assign({}, { switchmodel: null, error: action.error, send: false });
            break;
        case types.SAVE_SWITCHMODEL_RESET:
            state = Object.assign({}, state, { switchmodel: null, error: {}, send: false });
            break;
        default:
            break;
    }
    return state;
}