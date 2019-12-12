import { combineReducers } from 'redux';
import { roomReducer } from './rooms.reducer';
import userReducer from './user.reducer';

export default combineReducers({
    rooms: roomReducer,
    user: userReducer
})