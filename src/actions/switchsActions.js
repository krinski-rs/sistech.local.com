import {
    FETCHING_SWITCHS,
    FETCHING_SWITCHS_FAILURE,
    FETCHING_SWITCHS_SUCCESS,
    SAVE_SWITCHS,
    SAVE_SWITCHS_SUCCESS,
    SAVE_SWITCHS_FAILURE,
    SAVE_SWITCHS_RESET,
    GET_SWITCHS,
    GET_SWITCHS_FAILURE,
    GET_SWITCHS_SUCCESS
} from './types';
import SwitchsApi from '../api/SwitchsApi';

export function fetchingSwitchs() {
    return {
        type: FETCHING_SWITCHS
    }
}

export function getSwitchs() {
    return {
        type: GET_SWITCHS
    }
}

export const fetchingSwitchsSuccess = (switchss) => ({
    type: FETCHING_SWITCHS_SUCCESS,
    switchss
});

export const getSwitchsSuccess = (switchs) => ({
    type: GET_SWITCHS_SUCCESS,
    switchs
});

export const fetchingSwitchsFailure = (error) => ({
    type: GET_SWITCHS_FAILURE,
    error: error
});

export const getSwitchsFailure = (error) => ({
    type: FETCHING_SWITCHS_FAILURE,
    error: error
});

export function saveSwitchs() {
    return {
        type: SAVE_SWITCHS
    }
}

export function saveSwitchsReset() {
    return {
        type: SAVE_SWITCHS_RESET
    }
}

export const saveSwitchsSuccess = (switchs) => ({
    type: SAVE_SWITCHS_SUCCESS,
    switchs
});

export const saveSwitchsFailure = (error) => ({
    type: SAVE_SWITCHS_FAILURE,
    error: error
});


export const searchSwitchs = (parameters) => {
    return async dispatch => {
        dispatch(fetchingSwitchs());
        let retorno = await SwitchsApi.searchSwitchs(parameters);
        if(retorno.ok){
            retorno.switchss.then(switchss=>{
                dispatch(fetchingSwitchsSuccess(switchss));
            });
        }else{
            retorno.error.then(error=>{
                dispatch(fetchingSwitchsFailure(error));
            });
        }
    };
};

export const resetSwitchs = () => {
    return async dispatch => {
        dispatch(saveSwitchsReset());
    };
};


export const createSwitchs = (parameters) => {
    return async dispatch => {
        dispatch(saveSwitchs());
        let retorno = await SwitchsApi.createSwitchs(parameters);
        if(retorno.ok){
            retorno.switchs.then(switchs=>{
                dispatch(saveSwitchsSuccess(switchs));
            });
        }else{
            retorno.error.then(error=>{
                dispatch(saveSwitchsFailure(error));
            });
        }
    };
};

export const findSwitchs = (id) => {
    return async dispatch => {
        dispatch(getSwitchs());
        let retorno = await SwitchsApi.getSwitchs(id);
        if(retorno.ok){
            retorno.switchs.then(switchs=>{
                dispatch(getSwitchsSuccess(switchs));
            });
        }else{
            retorno.error.then(error=>{
                dispatch(getSwitchsFailure(error));
            });
        }
    };
};
