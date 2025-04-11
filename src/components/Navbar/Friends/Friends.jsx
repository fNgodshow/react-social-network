import s from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={s.friendsName}>{props.name}</div>
    )
}

export default Friends;