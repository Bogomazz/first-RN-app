export const ActionTypes = {
    SAVE_ACCESS_TOKEN: 'SAVE_ACCESS_TOKEN',
    SAVE_USER_DATA: 'SAVE_USER_DATA',
    SET_ROOMS_LIST: 'SET_ROOMS_LIST',
}

export const saveAccessToken = accessToken => ({
    type: SAVE_ACCESS_TOKEN,
    accessToken
});

export const saveUserData = userData => ({
    type: SAVE_USER_DATA,
    userData
});

export const setRoomsList = (rooms=[]) => ({
    type: SET_ROOMS_LIST,
    rooms
});
