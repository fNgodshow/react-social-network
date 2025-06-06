import userPhoto from "../../assets/images/userImage.webp";
import React from "react";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    console.log(props)
    let u = props.user;

    return (
    <div key={u.id}>
                <span>
                    <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                    </NavLink>
                    {props.isAuth &&
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollowThunk(u.id)
                                }}>unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.followThunk(u.id)
                                }}>follow</button>}
                        </div>
                    }
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                </span>
            </div>
        )
}

export default Users;