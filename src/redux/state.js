let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 30},
            {id: 2, message: 'It\'s my firts post', likesCount: 2},
        ]
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
        ]
    },
    sidebar: {
        friends: [
            { id: 1, name: 'Artyr' },
            { id: 2, name: 'Artem' },
            { id: 3, name: 'Denis' }
        ]
    }
}

export default state;