import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import s from "./Users.module.css";

let Users = (props) => {

    return <div>
        <Paginator currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        totalItemsCount={props.totalUsersCount}
                   pageSize={props.pageSize} />

        {
            props.users.map(u => <User
                user={u}
                key={u.id}
                followingInProgress={props.followingInProgress}
                unfollowThunk={props.unfollowThunk}
                followThunk={props.followThunk}
            />)
        }
    </div>
}

export default Users;