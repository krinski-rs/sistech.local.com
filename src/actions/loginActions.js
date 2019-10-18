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
        console.log('ANTES');
        console.log(retorno);
        if(retorno.ok){
            // dispatch(loginSuccess(Promise.resolve(retorno.user)));
            // console.log(retorno);
            retorno.user.then(user=>{
                console.log('ANTES 1');
                dispatch(loginSuccess(user));
                console.log('ANTES 2');
            });
        }else{
            retorno.error.then(error=>{
                console.log('ANTES 1');
                dispatch(loginFailure(error));
                console.log('ANTES 2');
            });
            // dispatch(loginFailure(Promise.resolve(retorno.error)));
        }
        // return loginApi.login(username, password)
        //     .then(retorno => {
        //         console.log(retorno);
        //         if(retorno.ok){
        //             dispatch(loginSuccess(retorno.user));
        //         }else{
        //             dispatch(loginFailure(retorno.error));
        //         }
        //     })
        //     .catch(error => {
        //         dispatch(loginFailure(error));
        //     });
    };
};
