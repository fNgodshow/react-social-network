import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>my post</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;