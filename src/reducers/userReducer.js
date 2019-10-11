import * as actionTypes from '../actions';

const initialState = { };

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_CREATE: {
            console.log(action);
            return {
                teste: 123,
                error: false
            };
        }
        default: {
            return state;
        }
    }
};

export default userReducer;