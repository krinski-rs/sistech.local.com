import * as actionTypes from '../actions';

const initialState = { };

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_CREATE: {
            console.log([state, action.payload]);
            return {
                teste: 123
            };
        }
        default: {
            return state;
        }
    }
};

export default userReducer;