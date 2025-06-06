import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {
    follow,
    unfollow,
    followThunk,
    unfollowThunk,
    requestUsers,
    toggleIsFollowing
} from "../../redux/users-reducer";
import {
    getUsers,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress
} from "../../redux/users-selectors";

const UsersContainer = () => {
    const dispatch = useDispatch();

    const users = useSelector(getUsers);
    const pageSize = useSelector(getPageSize);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const currentPage = useSelector(getCurrentPage);
    const isFetching = useSelector(getIsFetching);
    const followingInProgress = useSelector(getFollowingInProgress);
    const isAuth = useSelector((state) => state.auth.isAuth);

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize));
    }, [dispatch, currentPage, pageSize]);

    const onPageChanged = (pageNumber) => {
        dispatch(requestUsers(pageNumber, pageSize));
    };

    return (
        <>
            {isFetching && <Preloader />}
            <Users
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                users={users}
                isAuth={isAuth}
                follow={() => dispatch(follow())}
                unfollow={() => dispatch(unfollow())}
                followingInProgress={followingInProgress}
                toggleIsFollowing={(id, isFollowing) => dispatch(toggleIsFollowing(id, isFollowing))}
                followThunk={(userId) => dispatch(followThunk(userId))}
                unfollowThunk={(userId) => dispatch(unfollowThunk(userId))}
            />
        </>
    );
};

export default UsersContainer;
