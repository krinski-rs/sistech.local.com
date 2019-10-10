export const SESSION_LOGIN = 'SESSION_LOGIN';
export const SESSION_LOGOUT = 'SESSION_LOGOUT';

export const login = (formState) => dispatch =>
    dispatch({
        type: SESSION_LOGIN,
        payload: formState
    });

export const logout = () => dispatch =>
    dispatch({
        type: SESSION_LOGOUT,
        payload: {}
    });