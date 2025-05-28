import profileReducer, {addPostActionCreator} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";



test('new post should be added', () => {
    let action = addPostActionCreator('stas')

    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 30},
            {id: 2, message: 'It\'s my firts post', likesCount: 2},
        ]
    }

    let newState = profileReducer({state}, action)

    expect(newState.posts.length).toBe(3);
});
