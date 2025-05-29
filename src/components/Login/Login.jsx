import {Field, reduxForm} from "redux-form";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {required} from "../../utils/validators/validators";
import {createField, Input} from "../common/FormControls/FormControls";
import {Navigate} from "react-router-dom";


const LoginForm = ({error, captchaUrl, ...props}) => {
    return <form onSubmit={props.handleSubmit} action="">
        {createField(`Email`, 'email', [required], Input)}
        {createField(`Password`, 'password', [required], Input, {type: 'password'})}
        {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}

        { captchaUrl &&
            <img src={captchaUrl} alt=""/>
        }
        { captchaUrl &&
            createField(`Symbol from image`, 'captcha', [required], Input)
        }

        {error &&
            <div>
                {error}
            </div>
        }
        <div>
            <button>Sign in</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit} />
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);
