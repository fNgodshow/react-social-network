import {Field, reduxForm} from "redux-form";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormControls/FormControls";
import {Navigate} from "react-router-dom";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit} action="">
        <div>
            <Field component={Input} name={'email'}
                   validate={[required]}
                   placeholder={`email`} type="text"/>
        </div>
        <div>
            <Field component={Input} name={'password'}
                   validate={[required]}
                   placeholder={`password`} type="text"/>
        </div>
        <div>
            <Field component={'input'} name={'rememberMe'} type={`checkbox`}/>
        </div>
        {props.error &&
            <div>
                {props.error}
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
