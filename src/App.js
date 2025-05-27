import './App.css';
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";


function withRouter(Component) {
    return function Wrapper(props) {
        const params = useParams();
        return <Component {...props} params={params} />;
    };
}

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader />

        }

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='/profile'
                                   element={<ProfileContainer/>}/>
                            <Route path='/profile/:profileId'
                                   element={<ProfileContainer/>}/>
                            <Route path='/dialogs'
                                   element={<DialogsContainer/>}/>
                            <Route path='/dialogs/:id'
                                   element={<DialogsContainer/>}/>
                            <Route path='/users'
                                   element={<UsersContainer/>}/>
                            <Route path='/login'
                                   element={<Login/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)

