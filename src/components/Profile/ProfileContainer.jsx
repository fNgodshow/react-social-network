import React from "react";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import Profile from "./Profile";
import {getUsersProfile, getUsersStatus, saveProfile, savePhoto, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {compose} from "redux";

// HOC для передачи параметров URL в классовый компонент
function withRouter(Component) {
    return function Wrapper(props) {
        const params = useParams();
        return <Component {...props} params={params}/>;
    };
}

class ProfileContainer extends React.Component {

    refreshProfile() {
        let profileId = this.props.params.profileId;
        if (!profileId) {
            profileId = this.props.authorizedUserId;
            // if(!profileId) {
            //     this.props.history.push('/login')
            // }
        }
        this.props.getUsersProfile(profileId)
        this.props.getUsersStatus(profileId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.params.profileId != prevProps.params.profileId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         isOwner={!this.props.params.profileId}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         savePhoto={this.props.savePhoto}/>
            </div>
        );
    }
}

// Получение данных из Redux Store
const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps, {setUserProfile, getUsersProfile, getUsersStatus, updateStatus, savePhoto, saveProfile}),
    withRouter
)(ProfileContainer)

