import { combineReducers } from 'redux';
import { ActionTypes } from '../actions';

function userInfoReducer(state = null, action) {
    switch (action.type) {
        case ActionTypes.SAVE_USER_DATA:
            return action.userInfo;
        default:
            return state;
    }
}

function accessTokenReducer(state = null, action) {
    switch (action.type) {
        case ActionTypes.SAVE_ACCESS_TOKEN:
            return action.accessToken;
        default:
            return state;
    }
}

export default combineReducers({
    userInfo: userInfoReducer,
    accessToken: accessTokenReducer
})