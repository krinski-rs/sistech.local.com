import {
    FETCHING_SWITCHMODEL,
    FETCHING_SWITCHMODEL_FAILURE,
    FETCHING_SWITCHMODEL_SUCCESS,
    SAVE_SWITCHMODEL,
    SAVE_SWITCHMODEL_SUCCESS,
    SAVE_SWITCHMODEL_FAILURE,
    SAVE_SWITCHMODEL_RESET
} from './types';
import SwitchModelApi from '../api/SwitchModelApi';

export function fetchingSwitchModel() {
    return {
        type: FETCHING_SWITCHMODEL
    }
}

export const fetchingSwitchModelSuccess = (switchmodels) => ({
    type: FETCHING_SWITCHMODEL_SUCCESS,
    switchmodels
});

export const fetchingSwitchModelFailure = (error) => ({
    type: FETCHING_SWITCHMODEL_FAILURE,
    error: error
});

export function saveSwitchModel() {
    return {
        type: SAVE_SWITCHMODEL
    }
}

export function saveSwitchModelReset() {
    return {
        type: SAVE_SWITCHMODEL_RESET
    }
}

export const saveSwitchModelSuccess = (switchmodel) => ({
    type: SAVE_SWITCHMODEL_SUCCESS,
    switchmodel
});

export const saveSwitchModelFailure = (error) => ({
    type: SAVE_SWITCHMODEL_FAILURE,
    error: error
});


export const searchSwitchModel = (parameters) => {
    return async dispatch => {
        dispatch(fetchingSwitchModel());
        let retorno = await SwitchModelApi.searchSwitchModel(parameters);
        if(retorno.ok){
            retorno.switchmodels.then(switchmodels=>{
                dispatch(fetchingSwitchModelSuccess(switchmodels));
            });
        }else{
            retorno.error.then(error=>{
                dispatch(fetchingSwitchModelFailure(error));
            });
        }
    };
};

export const resetSwitchModel = () => {
    return async dispatch => {
        dispatch(saveSwitchModelReset());
    };
};


export const createSwitchModel = (parameters) => {
    return async dispatch => {
        dispatch(saveSwitchModel());
        let retorno = await SwitchModelApi.createSwitchModel(parameters);
        if(retorno.ok){
            retorno.switchmodel.then(switchmodel=>{
                dispatch(saveSwitchModelSuccess(switchmodel));
            });
        }else{
            retorno.error.then(error=>{
                dispatch(saveSwitchModelFailure(error));
            });
        }
    };
};
