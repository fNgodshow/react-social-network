import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}

export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, data: {id, email, login, isAuth}})

export const userAuth = () => (dispatch) => {
        return authAPI.me()
            .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setUserData(id, email, login, true));
            }
        });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(userAuth());
            } else {
                let message = response.data.messages.lenght > 0 ? response.data.messages : 'some error';
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false));
            }
        })
}

export default authReducer;
