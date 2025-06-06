import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";

const ProfileDataFormRedux = ({ profile, ...props }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: profile,
    });

    useEffect(() => {
        if (profile) {
            reset(profile);
        }
    }, [profile, reset]);

    const onSubmitHandler = (data) => {
        props.onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div>
                <input placeholder="Full name" {...register("fullName")} />
            </div>
            <div>
                <input type="checkbox" {...register("lookingForAJob")} />
            </div>
            <div>
        <textarea
            placeholder="My professional skills"
            {...register("lookingForAJobDescription")}
        />
            </div>
            <div>
                <textarea placeholder="About Me" {...register("aboutMe")} />
            </div>
            {profile.contacts &&
                Object.keys(profile.contacts).map((key, index) => (
                    <div key={index}>
                        <div>{key}:</div>
                        <input placeholder={key} {...register(`contacts.${key}`)} />
                    </div>
                ))}
            <div>
                <input type="submit" value="Сохранить" />
            </div>
        </form>
    );
};

export default ProfileDataFormRedux;
