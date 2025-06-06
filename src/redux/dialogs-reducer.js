const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [{id: 1, name: 'Dimych'}, {id: 2, name: 'Art'}, {id: 3, name: 'Yar'}],
    messages: [{id: 1, message: 'Hi'}, {id: 2, message: 'How is your?'}, {id: 3, message: 'Yo'}],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newTextBody = action.newMessageElement;
            return {
                ...state,
                messages: [...state.messages, { id: Math.random(), message: newTextBody }],
            };
        default:
            return state;

    }
}

export const sendMessageCreator = (newMessageElement) => ({type: SEND_MESSAGE, newMessageElement});

export default dialogsReducer;
