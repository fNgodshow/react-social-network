import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 30},
        {id: 2, message: 'It\'s my firts post', likesCount: 2},
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
        default:
            return state;
    }

}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUsersProfile = (profileId) => {
    return (dispatch) => {
        profileAPI.getUsersProfile(profileId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}

export const getUsersStatus = (profileId) => {
    return (dispatch) => {
        profileAPI.getUsersStatus(profileId).then(data => {
            dispatch(setUserStatus(data));
        });
    }
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        })
}


export default profileReducer;