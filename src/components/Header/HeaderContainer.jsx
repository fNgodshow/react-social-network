import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import { logout } from "../../redux/auth-reducer";

const HeaderContainer = () => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const login = useSelector(state => state.auth.login);
    const dispatch = useDispatch();

    return <Header isAuth={isAuth} login={login} logout={() => dispatch(logout())} />;
};

export default HeaderContainer;
