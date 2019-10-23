import { combineReducers } from 'redux';

// import thunkData from './thunkReducer';
import login from './loginReducer';
import users from './userReducer';

const rootReducer = combineReducers({
    // thunkData,
    login,
    users
});

export default rootReducer;