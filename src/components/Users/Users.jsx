import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import s from "./Users.module.css";

let Users = (props) => {
    return <div className={s.usersContainer}>
        <Paginator currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        totalItemsCount={props.totalUsersCount}
                   pageSize={props.pageSize} />
        <div className={s.users}>
            {
                props.users.map(u => <User
                    user={u}
                    key={u.id}
                    isAuth={props.isAuth}
                    followingInProgress={props.followingInProgress}
                    unfollowThunk={props.unfollowThunk}
                    followThunk={props.followThunk}
                />)
            }
        </div>
    </div>
}

export default Users;