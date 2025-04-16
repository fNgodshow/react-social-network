const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageBody
            }
            state.newMessageBody = '';
            state.messages.push(newMessage);
            return state;

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newTextBody;
            return state;
        default:
            return state;

    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY, newTextBody: text
});

export default dialogsReducer;
