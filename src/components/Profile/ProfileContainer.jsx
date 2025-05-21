import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Profile from "./Profile";
import {getUsersProfile, setUserProfile} from "../../redux/profile-reducer";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

// HOC для передачи параметров URL в классовый компонент
function withRouter(Component) {
    return function Wrapper(props) {
        const params = useParams();
        return <Component {...props} params={params} />;
    };
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let profileId = this.props.params.profileId;
        if(!profileId) {
            profileId = 2;
        }
            this.props.getUsersProfile(profileId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        );
    }
}

// Получение данных из Redux Store
const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default compose(
    connect(mapStateToProps, { setUserProfile, getUsersProfile }),
    withRouter
)(ProfileContainer)

