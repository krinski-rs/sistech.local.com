import {
    FETCHING_SERVICE,
    FETCHING_SERVICE_FAILURE,
    FETCHING_SERVICE_SUCCESS,
    SAVE_SERVICE,
    SAVE_SERVICE_SUCCESS,
    SAVE_SERVICE_FAILURE,
    SAVE_SERVICE_RESET
} from './types';
import serviceApi from '../api/ServiceApi';

export function fetchingService() {
    return {
        type: FETCHING_SERVICE
    }
}

export const fetchingServiceSuccess = (services) => ({
    type: FETCHING_SERVICE_SUCCESS,
    services
});

export const fetchingServiceFailure = (error) => ({
    type: FETCHING_SERVICE_FAILURE,
    error: error
});

export function saveService() {
    return {
        type: SAVE_SERVICE
    }
}

export function saveServiceReset() {
    return {
        type: SAVE_SERVICE_RESET
    }
}

export const saveServiceSuccess = (service) => ({
    type: SAVE_SERVICE_SUCCESS,
    service
});

export const saveServiceFailure = (error) => ({
    type: SAVE_SERVICE_FAILURE,
    error: error
});


export const searchService = (parameters) => {
    return async dispatch => {
        dispatch(fetchingService());
        let retorno = await serviceApi.searchService(parameters);
        if(retorno.ok){
            retorno.services.then(services=>{
                dispatch(fetchingServiceSuccess(services));
            });
        }else{
            retorno.error.then(error=>{
                dispatch(fetchingServiceFailure(error));
            });
        }
    };
};

export const resetService = () => {
    return async dispatch => {
        dispatch(saveServiceReset());
    };
};


export const createService = (parameters) => {
    return async dispatch => {
        dispatch(saveService());
        let retorno = await serviceApi.createService(parameters);
        if(retorno.ok){
            retorno.service.then(service=>{
                dispatch(saveServiceSuccess(service));
            });
        }else{
            retorno.error.then(error=>{
                dispatch(saveServiceFailure(error));
            });
        }
    };
};
