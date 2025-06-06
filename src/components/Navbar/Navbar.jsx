import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <NavLink className={({isActive}) => isActive ? `${s.item} ${s.active}` : s.item}
                     to="/profile">Profile</NavLink>
            {/*<NavLink className={({isActive}) => isActive ? `${s.item} ${s.active}` : s.item}*/}
            {/*         to="/dialogs">Messages</NavLink>*/}
            <NavLink className={({isActive}) => isActive ? `${s.item} ${s.active}` : s.item}
                     to="/users">Users</NavLink>
            {/*<a className={s.item} href="#">News</a>*/}
            {/*<a className={s.item} href="#">Music</a>*/}
            {/*<a className={s.item} href="#">Settings</a>*/}
        </nav>
    );
}

export default Navbar;