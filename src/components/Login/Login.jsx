import {Field, reduxForm} from "redux-form";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {required} from "../../utils/validators/validators";
import {createField, Input} from "../common/FormControls/FormControls";
import {Navigate} from "react-router-dom";


const LoginForm = (props, error) => {
    return <form onSubmit={props.handleSubmit} action="">
        {createField(`Email`, 'email', [required], Input)}
        {createField(`Password`, 'password', [required], Input, {type: 'password'})}
        {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}
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
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
