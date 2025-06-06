import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from '../../../assets/images/userImage.webp'
import {useEffect, useState} from "react";
import ProfileDataForm from "./ProfileDataForm";
import ProfileDataFormRedux from "./ProfileDataForm";
import {useSelector} from "react-redux";

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false)
                console.log(props.profile)

            }
        )
    }

    return (
            <div className={s.descriptionBlock}>
                    <div>
                        <img className={s.userPhoto} src={props.profile.photos.large || userPhoto} alt=""/>
                        {props.isOwner &&
                            <div>
                                <label htmlFor="change_photo">Choose images to upload</label>
                                <div>
                                    <input id='change_photo' type={'file'} onChange={onMainPhotoSelected}/>
                                </div>
                            </div>
                        }
                    </div>

                    <div>
                        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                        {editMode &&
                            <ProfileDataFormRedux initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/>
                        }
                        {!editMode &&
                            <ProfileData goToEditMode={() => {
                                setEditMode(true)
                            }} isOwner={props.isOwner} profile={props.profile}/>
                        }
                    </div>
                </div>
    );
}

const ProfileData = (props) => {
    return <div>
        {props.isOwner &&
            <button className='button' onClick={props.goToEditMode}>Edit info</button>
        }
        <div>
            <b>My name:</b> {props.profile.fullName}
        </div>
        <div>
            <b>about Me:</b> {props.profile.aboutMe}
        </div>
        <div>
            <b>Looking for a job:</b> {props.profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        <div>
            <b>lookingForAJobDescription:</b> {props.profile.lookingForAJobDescription}
        </div>
        <div>
            <b>Contacts:</b>
            {
                Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                })
            }
        </div>
    </div>
}



export const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contacts}><b>{contactTitle} : </b> {contactValue}</div>
}

export default ProfileInfo;