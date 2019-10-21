import {
    FETCHING_USERS,
    FETCHING_USERS_FAILURE,
    FETCHING_USERS_SUCCESS,
    SAVE_USER_SUCCESS,
    SAVE_USER_FAILURE
} from './types';
import * as userApi from '../api/UserApi';

export function fetchingUser() {
    return {
        type: LOGIN_USER
    }
}

export const fetchingUserSuccess = (users) => ({
    type: FETCHING_USERS_SUCCESS,
    user
});

export const fetchingUserFailure = (error) => ({
    type: FETCHING_USERS_FAILURE,
    error: error
});

export const searchUser = (parameters) => {
    return async dispatch => {
        dispatch(fetchingUser());
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
