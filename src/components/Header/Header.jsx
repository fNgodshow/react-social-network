import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
        <div>
            {
                props.isAuth ?
                    <div className={s.headerContent}>
                        <div>
                            {props.login}
                        </div>
                        <button className='button' onClick={props.logout}>LogOut</button>
                    </div>
                    : <NavLink className={s.loginLink} to={`login`}>Login</NavLink>
            }

        </div>
        </header>
    );
}

export default Header;