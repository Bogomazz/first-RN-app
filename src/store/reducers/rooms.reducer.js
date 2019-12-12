import { ActionTypes } from "../actions";

export const roomReducer = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.SET_ROOMS_LIST:
            return action.rooms;
        default:
            return state;
    }
}