import {
    FETCHING_USERS,
    FETCHING_USERS_FAILURE,
    FETCHING_USERS_SUCCESS,
    SAVE_USERS,
    SAVE_USER_SUCCESS,
    SAVE_USER_FAILURE,
    SAVE_USER_RESET
} from './types';
import userApi from '../api/UserApi';

export function fetchingUser() {
    return {
        type: FETCHING_USERS
    }
}

export const fetchingUserSuccess = (users) => ({
    type: FETCHING_USERS_SUCCESS,
    users
});

export const fetchingUserFailure = (error) => ({
    type: FETCHING_USERS_FAILURE,
    error: error
});

export function saveUser() {
    return {
        type: SAVE_USERS
    }
}

export function saveUserReset() {
    return {
        type: SAVE_USER_RESET
    }
}

export const saveUserSuccess = (user) => ({
    type: SAVE_USER_SUCCESS,
    user
});

export const saveUserFailure = (error) => ({
    type: SAVE_USER_FAILURE,
    error: error
});


export const searchUser = (parameters) => {
    return async dispatch => {
        dispatch(fetchingUser());
        let retorno = await userApi.searchUsers(parameters);
        if(retorno.ok){
            retorno.users.then(users=>{
                dispatch(fetchingUserSuccess(users));
            });
        }else{
            retorno.error.then(error=>{
                dispatch(fetchingUserFailure(error));
            });
        }
    };
};

export const resetUser = () => {
    return async dispatch => {
        dispatch(saveUserReset());
    };
};


export const createUser = (parameters) => {
    return async dispatch => {
        dispatch(saveUser());
        let retorno = await userApi.createUsers(parameters);
        if(retorno.ok){
            retorno.user.then(user=>{
                dispatch(saveUserSuccess(user));
            });
        }else{
            retorno.error.then(error=>{
                dispatch(saveUserFailure(error));
            });
        }
    };
};
