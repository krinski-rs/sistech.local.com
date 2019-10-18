import { combineReducers } from 'redux';

// import thunkData from './thunkReducer';
import login from './loginReducer';

const rootReducer = combineReducers({
    // thunkData,
    login
});

export default rootReducer;