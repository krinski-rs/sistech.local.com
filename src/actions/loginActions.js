import {
    LOGIN_USER,
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS
} from './types';
import loginApi from '../api/AuthApi';

export function loginUser() {
    return {
        type: LOGIN_USER
    }
}

export const loginSuccess = (user) => ({
    type: LOGIN_USER_SUCCESS,
    user
});

export const loginFailure = (error) => ({
    type: LOGIN_USER_FAILURE,
    error: error
});

export const login = (username, password) => {
    return async dispatch => {
        dispatch(loginUser());
        let retorno = await loginApi.login(username, password);
        if(retorno.ok){
            retorno.user.then(user=>{
                dispatch(loginSuccess(user));
            });
        }else{
            retorno.error.then(error=>{
                dispatch(loginFailure(error));
            });
        }
    };
};
