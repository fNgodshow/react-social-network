import s from "./Users.module.css";
import userPhoto from "../../assets/images/userImage.webp";
import React from "react";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

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
                            ? <button onClick={() => {
                                usersAPI.unfollowUsers(u.id).then(data => {
                                    if (data.resultCode == 0) {
                                        props.unfollow(u.id);
                                    }
                                });
                            }}>unfollow</button>
                            : <button onClick={() => {
                                usersAPI.followUsers(u.id).then(data => {
                                    if (data.resultCode == 0) {
                                        props.follow(u.id);
                                    }
                                });
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