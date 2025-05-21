import {connect} from "react-redux";
import React from "react";
import Header from "./Header";
import {setUserData, userAuth} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
           this.props.userAuth();
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


export default connect(mapStateToProps, {setUserData, userAuth})(HeaderContainer);
