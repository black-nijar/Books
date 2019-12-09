import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { bookReducer } from './bookReducer';

const rootReducer = combineReducers ({
    auth: authReducer,
    data: bookReducer
})

export default rootReducer