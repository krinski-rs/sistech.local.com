import * as actionTypes from '../actions';

const initialState = {
    loggedIn: true,
    user: {
        first_name: 'Shen',
        last_name: 'Zhi',
        id: 0,
        email: 'demo@devias.io',
        avatar: '/images/avatars/avatar_11.png',
        bio: 'Brain Director',
        role: 'ADMIN' // ['GUEST', 'USER', 'ADMIN']
    }
};

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SESSION_LOGIN: {
            console.log([state, action]);
            return {
                ...initialState
            };
        }   

        case actionTypes.SESSION_LOGOUT: {
            return {
                ...state,
                loggedIn: false,
                user: {
                    role: 'GUEST'
                }
            };
        }

        default: {
            return state;
        }
    }
};

export default sessionReducer;