import s from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://ru.tv/uploads/60/74/337f913a56dab08cc55df4ae7fca.jpg',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'Hellloooo',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://ru.tv/uploads/60/74/337f913a56dab08cc55df4ae7fca.jpg',
                    followed: true,
                    fullName: 'Stas',
                    status: 'Hellloooo a',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 3,
                    photoUrl: 'https://ru.tv/uploads/60/74/337f913a56dab08cc55df4ae7fca.jpg',
                    followed: false,
                    fullName: 'Denis',
                    status: 'Hellloooo t',
                    location: {city: 'Minsk', country: 'Belarus'}
                }
            ]
        )
    }


    return (
        props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt=""/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
        </div>)
    )
}

export default Users;