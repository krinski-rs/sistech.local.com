import { combineReducers } from 'redux';

// import thunkData from './thunkReducer';
import login from './loginReducer';
import users from './userReducer';
import service from './serviceReducer';
import pop from './popReducer';
import switchmodel from './switchmodelReducer';

const rootReducer = combineReducers({
    // thunkData,
    login,
    users,
    service,
    pop,
    switchmodel
});

export default rootReducer;