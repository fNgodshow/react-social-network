import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";



const MyPosts = (props) => {
    let postsElement = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }
    console.log('Render')

    return (
        <div className={s.postsBlock}>
            <h3>my post</h3>
            <div>
                <AddNewPostFormRedux onSubmit={onAddPost} />
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
}

const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit} action="">
        <div>
            <Field component={'textarea'} name={'newPostText'} />
        </div>
        <button>Add post</button>
    </form>
}

const AddNewPostFormRedux = reduxForm({form: 'AddNewPostForm'})(AddNewPostForm)

export default React.memo(MyPosts);