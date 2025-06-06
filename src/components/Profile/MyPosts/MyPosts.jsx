import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {useForm} from "react-hook-form";


const MyPosts = (props) => {
    let postsElement = props.posts.map(post => <Post key={post.id} message={post.message}
                                                     likesCount={post.likesCount} profile={props.profile}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>my post</h3>
            <div>
                <AddMessageForm onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
}

const AddMessageForm = (props) => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm()

    const onSubmitHandler = (data) => {
        props.onSubmit(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <textarea placeholder='Enter your post' {...register('newPostText')}/>
            <div><input type='submit'/></div>
        </form>
    )
}

export default React.memo(MyPosts);