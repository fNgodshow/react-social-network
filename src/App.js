import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile profilePage={props.state.profilePage}
                                                                 dispatch={props.dispatch} />}/>
                        <Route path='/dialogs' element={<Dialogs
                            store={props.store}
                            dispatch={props.dispatch} />}/>
                        <Route path='/dialogs/:id' element={<Dialogs
                            store={props.store}
                            dispatch={props.dispatch} />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
