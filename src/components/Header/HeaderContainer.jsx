import {connect} from "react-redux";
import React from "react";
import Header from "./Header";
import {logout, setUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

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


export default connect(mapStateToProps, {setUserData, logout})(HeaderContainer);
