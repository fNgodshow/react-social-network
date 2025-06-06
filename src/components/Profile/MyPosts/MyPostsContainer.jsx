import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
    const posts = useSelector(state => state.profilePage.posts);
    const profile = useSelector(state => state.profilePage.profile);
    const dispatch = useDispatch();

    const addPost = (newPostText) => {
        dispatch(addPostActionCreator(newPostText));
    };

    return <MyPosts posts={posts} profile={profile} addPost={addPost} />;
};

export default MyPostsContainer;
