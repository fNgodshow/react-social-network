import './App.css';
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, {Component, lazy} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));

function withRouter(Component) {
    return function Wrapper(props) {
        const params = useParams();
        return <Component {...props} params={params} />;
    };
}

const SuspendedProfile = withSuspense(ProfileContainer);
const SuspendedDialogs = withSuspense(DialogsContainer);

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
                            <Route
                                path='/profile'
                                element={<SuspendedProfile />}
                            />
                            <Route
                                path='/profile/:profileId'
                                element={<SuspendedProfile />}
                            />
                            <Route
                                path='/dialogs'
                                element={<SuspendedDialogs />}
                            />
                            <Route
                                path='/dialogs/:id'
                                element={<SuspendedDialogs />}
                            />
                            <Route path='/users' element={<UsersContainer />} />
                            <Route path='/login' element={<Login />} />
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

