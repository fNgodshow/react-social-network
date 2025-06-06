import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 30},
        {id: 2, message: 'It\'s my firts post', likesCount: 2},
        {id: 3, message: 'It\'s my ', likesCount: 4},
    ],
    profile: null,
    status: 'sdsdd'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE:
            state.profile = action.profile;
            return state;
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }

}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUsersProfile = (profileId) => async (dispatch) => {
    try {
        const data = await profileAPI.getUsersProfile(profileId);
        dispatch(setUserProfile(data));
    } catch(error) {
        alert(`Go through the login process.`)
    }
}

export const getUsersStatus = (profileId) => async (dispatch) => {
        const data = await profileAPI.getUsersStatus(profileId)
        dispatch(setUserStatus(data));
}

export const updateStatus = (status) => async (dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        } if (response.data.resultCode === 1) {
            alert(`Ошибка ${response.data.messages}`)
        }
    } catch(error) {
        alert(`Ошибка ${error}`)
    }

}

export const savePhoto = (file) => (dispatch) => {
    profileAPI.savePhoto(file)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos));
            }
        })
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getUsersProfile(userId));
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
        // return Promise.reject(response.data.messages[0]);
    }
}


export default profileReducer;