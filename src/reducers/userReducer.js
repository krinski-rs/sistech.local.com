import * as actionTypes from '../actions';
import { requests } from '../utils/requests';

const initialState = {
    user: null,
    error: true,
    send: false
};

const userReducer = async (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_CREATE: {
            let retorno = await requests(action.payload, "POST", null, 'http://sistech-api.local.com/user/', null);
            console.log("RETORNO");
            console.log(retorno);
            return retorno;
        }
        default: {
            return state;
        }
    }
};

export default userReducer;