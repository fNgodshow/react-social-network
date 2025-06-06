import s from './Post.module.css';
import React from "react";
import userPhoto from "../../../../assets/images/userImage.webp";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src={props.profile ? props.profile.photos.small || userPhoto : userPhoto}
                alt=""/>
            {props.message}
            <div>
                <span>like({props.likeCounts})</span>
            </div>
        </div>
    );
}

export default Post;