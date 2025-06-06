import './App.css';
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import { HashRouter, Route, Routes, useParams, useNavigate } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import { withSuspense } from "./hoc/withSuspense";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));

const SuspendedProfile = withSuspense(ProfileContainer);
const SuspendedDialogs = withSuspense(DialogsContainer);

const App = () => {
    const initialized = useSelector(state => state.app.initialized);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeApp());
    }, [dispatch]);

    if (!initialized) {
        return <Preloader />;
    }

    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<SuspendedProfile />} />
                        <Route path='/profile/:profileId' element={<SuspendedProfile />} />
                        <Route path='/dialogs' element={<SuspendedDialogs />} />
                        <Route path='/dialogs/:id' element={<SuspendedDialogs />} />
                        <Route path='/users' element={<UsersContainer />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </div>
            </div>
        </HashRouter>
    );
};

export default App;
