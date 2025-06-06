import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./Profile";
import {
    getUsersProfile,
    getUsersStatus,
    saveProfile,
    savePhoto,
    setUserProfile,
    updateStatus
} from "../../redux/profile-reducer";

const ProfileContainer = () => {
    const { profileId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const profile = useSelector((state) => state.profilePage.profile);
    const status = useSelector((state) => state.profilePage.status);
    const authorizedUserId = useSelector((state) => state.auth.id);
    const isAuth = useSelector((state) => state.auth.isAuth);

    const refreshProfile = () => {
        let id = profileId;
        if (!id) {
            id = authorizedUserId;
            if (!id) {
              navigate('/login');
            }
        }
        dispatch(getUsersProfile(id));
        dispatch(getUsersStatus(id));
    };

    useEffect(() => {
        refreshProfile();
    }, [profileId, authorizedUserId, dispatch, profile]);

    return (
        <div>
            <Profile
                isOwner={!profileId}
                profile={profile}
                status={status}
                updateStatus={(status) => dispatch(updateStatus(status))}
                savePhoto={(photoFile) => dispatch(savePhoto(photoFile))}
                saveProfile={(profileData) => dispatch(saveProfile(profileData))}
            />
        </div>
    );
};

export default ProfileContainer;
