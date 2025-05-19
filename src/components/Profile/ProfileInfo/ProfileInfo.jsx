import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {
    console.log(props)
    if (!props.profile) {
        return <Preloader/>
    }

    return (<div>
        <div>
            <img
                src="https://ae01.alicdn.com/kf/HTB1SLh5SFXXXXb2XpXXq6xXFXXX8/Tiger-on-the-stone-needlework-5D-cube-diamond-embroidery-cross-stich-handcraft-stick-rhinestone-pasted-diamond.jpg"
                alt=""/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} alt=""/>
            <div>{props.profile.aboutMe}</div>
        </div>
    </div>);
    console.log(props)

}

export default ProfileInfo;