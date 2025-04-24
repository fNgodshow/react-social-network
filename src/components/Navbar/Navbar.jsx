import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {

    // let friendsElement = props.state.friends.map(friend => <Friends key={friend.id} name={friend.name}/>)

    return (
        <nav className={s.nav}>
            <NavLink className={({isActive}) => isActive ? `${s.item} ${s.active}` : s.item}
                     to="/profile">Profile</NavLink>
            <NavLink className={({isActive}) => isActive ? `${s.item} ${s.active}` : s.item}
                     to="/dialogs">Messages</NavLink>
            <NavLink className={({isActive}) => isActive ? `${s.item} ${s.active}` : s.item}
                     to="/users">Users</NavLink>
            <a className={s.item} href="#">News</a>
            <a className={s.item} href="#">Music</a>
            <a className={s.item} href="#">Settings</a>
            <div>
                Friends
                {/*<div className={s.bro}>{friendsElement}</div>*/}
            </div>
        </nav>
    );
}

export default Navbar;