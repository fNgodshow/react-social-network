import s from "./Users.module.css";
import userPhoto from "../../assets/images/userImage.webp";
import React from "react";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {followThunk, toggleIsFollowing, unfollowThunk} from "../../redux/users-reducer";

let Users = (props) => {

    let pagesCount = Math.ceil((props.totalUsersCount / props.pageSize) / 100);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map((p, index) => (
                <span key={index} className={props.currentPage === p ? s.selectedPage : ""}
                      onClick={() => props.onPageChanged(p)}>
            {p}
        </span>
            ))}
        </div>

        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                    </NavLink>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollowThunk(u.id)
                            }}>unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.followThunk(u.id)
                            }}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;