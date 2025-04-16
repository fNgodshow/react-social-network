import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://avatars.mds.yandex.net/i?id=18a8baedb51cd982584702a3204c6bc34471b8c7-11923369-images-thumbs&n=13"
                alt=""/>
            {props.message}
            <div>
                <span>like({props.likeCounts})</span>
            </div>
        </div>
    );
}

export default Post;