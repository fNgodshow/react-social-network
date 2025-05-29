import {createField, Input, Textarea} from "../../common/FormControls/FormControls";
import {reduxForm} from "redux-form";
import {Contact} from "./ProfileInfo";

const ProfileDataForm = ({handleSubmit, profile, error}) => {

    return <form onSubmit={handleSubmit} action="">
        <div>Full name</div>
        {
            createField('Full name', 'fullName', [], Input)
        }
        <div>lookingForAJob</div>
        {
            createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})
        }
        <div>My professional skills</div>
        {
            createField('My professional skills', 'lookingForAJobDescription', [], Textarea)
        }
        <div>About Me</div>
        {
            createField('AboutMe', 'aboutMe', [], Textarea)
        }
        <div>Contacts:</div>
        {
            Object.keys(profile.contacts).map(key => {
                return <div>
                    <div>{key}:</div>
                    {
                        createField(`${key}`, `contacts.${key}`, [], Input)
                    }
                </div>
            })
        }
        {error &&
            <div>
                {error}
            </div>
        }
        <button>Save</button>
    </form>
}

const ProfileDataFormRedux = reduxForm({form: 'edit-profile', enableReinitialize: true})(ProfileDataForm)

export default ProfileDataFormRedux;