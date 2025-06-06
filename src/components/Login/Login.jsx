import React from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth-reducer";

const AddMessageForm = ({ captchaUrl, onSubmit }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmitHandler = (data) => {
        onSubmit(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div>
                <input
                    placeholder="Email"
                    type="email"
                    {...register("email", { required: "Email обязателен" })}
                />
                {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
            </div>
            <div>
                <input
                    placeholder="Password"
                    type="password"
                    {...register("password", { required: "Password обязателен" })}
                />
                {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}
            </div>
            <div>
                <input type="checkbox" {...register("rememberMe")} />
                <span>Remember me</span>
            </div>
            {captchaUrl && (
                <>
                    <div>
                        <img src={captchaUrl} alt="Captcha" />
                    </div>
                    <div>
                        <input
                            placeholder="Symbol from image"
                            {...register("captcha", { required: "Введите символ с картинки" })}
                        />
                        {errors.captcha && <span style={{ color: "red" }}>{errors.captcha.message}</span>}
                    </div>
                </>
            )}
            <div>
                <input value="Sign in" type="submit" />
            </div>
        </form>
    );
};

const Login = () => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const captchaUrl = useSelector(state => state.auth.captchaUrl);
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        dispatch(login(
            formData.email,
            formData.password,
            formData.rememberMe,
            formData.captcha
        ));
    };

    if (isAuth) {
        return <Navigate to="/profile" />;
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <AddMessageForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
        </div>
    );
};

export default Login;
