import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (<div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} alt=""/>
            <ProfileStatus status={props.profile.aboutMe} />
        </div>
    </div>);

}

export default ProfileInfo;