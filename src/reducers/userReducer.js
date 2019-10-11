import * as actionTypes from '../actions';

const initialState = {
    user: null,
    error: true,
    send: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_CREATE: {
            console.log(action);
            return {
                teste: 123,
                error: true,
                send: true
            };
        }
        default: {
            return state;
        }
    }
};

export default userReducer;