import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 30},
                {id: 2, message: 'It\'s my firts post', likesCount: 2},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Art'},
                {id: 3, name: 'Yar'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your?'},
                {id: 3, message: 'Yo'}
            ],
            newMessageBody: '',
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Artyr'},
                {id: 2, name: 'Artem'},
                {id: 3, name: 'Denis'}
            ]
        }
    },
    _callSubscriber() {
        console.log('state Changet')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;