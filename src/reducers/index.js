import { combineReducers } from 'redux';

// import thunkData from './thunkReducer';
import login from './loginReducer';
import users from './userReducer';
import service from './serviceReducer';

const rootReducer = combineReducers({
    // thunkData,
    login,
    users,
    service
});

export default rootReducer;