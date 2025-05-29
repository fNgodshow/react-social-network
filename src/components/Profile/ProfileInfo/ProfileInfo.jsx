import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/userImage.webp'
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";
import ProfileDataFormRedux from "./ProfileDataForm";

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
            }
        )
    }

    return (<div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} alt=""/>
                {props.isOwner &&
                    <input type={'file'} onChange={onMainPhotoSelected}/>
                }
                {editMode &&
                    <ProfileDataFormRedux initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/>
                }
                {!editMode &&
                    <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} isOwner={props.isOwner} profile={props.profile}/>
                }
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

const ProfileData = (props) => {
    return <div>
        {props.isOwner &&
            <button onClick={props.goToEditMode}>Edit</button>
        }
        <div>
            My name: {props.profile.fullName}
        </div>
        <div>
            about Me: {props.profile.aboutMe}
        </div>
        <div>
            Looking for a job: {props.profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        <div>
            lookingForAJobDescription: {props.profile.lookingForAJobDescription}
        </div>
        <div>
            Contacts:
            {
                Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                })
            }
        </div>
    </div>
}



export const Contact = ({contactTitle, contactValue}) => {
    return <div>{contactTitle} : {contactValue}</div>
}

export default ProfileInfo;