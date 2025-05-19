import {connect} from "react-redux";
import React from "react";
import Header from "./Header";
import {setUserData} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
            usersAPI.userAuth().then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setUserData(id, email, login);
                }
            });
    }

    render() {
        return <>
            <Header {...this.props} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, {setUserData})(HeaderContainer);
