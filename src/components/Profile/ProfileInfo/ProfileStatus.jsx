import {useEffect, useState} from "react";
import s from './ProfileInfo.module.css';

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div className={s.profileStatus}>
                    <span  onDoubleClick={activateEditMode}>
                        {props.status || 'Here should be my status'}
                    </span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange}
                           onBlur={deactivateEditMode}
                           autoFocus={true}
                           value={status}
                           type="text"/>
                </div>
            }
        </div>
    );
}

export default ProfileStatus;

