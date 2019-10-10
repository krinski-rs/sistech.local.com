
export const USER_CREATE = 'USER_CREATE';

export const userCreate = (values) => dispatch =>
dispatch({
    type: USER_CREATE,
    payload: values
});
