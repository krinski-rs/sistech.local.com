import {
    FETCHING_POP,
    FETCHING_POP_FAILURE,
    FETCHING_POP_SUCCESS,
    SAVE_POP,
    SAVE_POP_SUCCESS,
    SAVE_POP_FAILURE,
    SAVE_POP_RESET
} from './types';
import popApi from '../api/PopApi';

export function fetchingPop() {
    return {
        type: FETCHING_POP
    }
}

export const fetchingPopSuccess = (pops) => ({
    type: FETCHING_POP_SUCCESS,
    pops
});

export const fetchingPopFailure = (error) => ({
    type: FETCHING_POP_FAILURE,
    error: error
});

export function savePop() {
    return {
        type: SAVE_POP
    }
}

export function savePopReset() {
    return {
        type: SAVE_POP_RESET
    }
}

export const savePopSuccess = (pop) => ({
    type: SAVE_POP_SUCCESS,
    pop
});

export const savePopFailure = (error) => ({
    type: SAVE_POP_FAILURE,
    error: error
});


export const searchPop = (parameters) => {
    return async dispatch => {
        dispatch(fetchingPop());
        let retorno = await popApi.searchPop(parameters);
        if(retorno.ok){
            retorno.pops.then(pops=>{
                dispatch(fetchingPopSuccess(pops));
            });
        }else{
            retorno.error.then(error=>{
                dispatch(fetchingPopFailure(error));
            });
        }
    };
};

export const resetPop = () => {
    return async dispatch => {
        dispatch(savePopReset());
    };
};


export const createPop = (parameters) => {
    return async dispatch => {
        dispatch(savePop());
        let retorno = await popApi.createPop(parameters);
        if(retorno.ok){
            retorno.pop.then(pop=>{
                dispatch(savePopSuccess(pop));
            });
        }else{
            retorno.error.then(error=>{
                dispatch(savePopFailure(error));
            });
        }
    };
};
