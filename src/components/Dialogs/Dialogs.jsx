import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {useForm} from "react-hook-form";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messages.map(message => <Message key={message.id} message={message.message}
                                                                  id={message.id}/>);

    let onSendMessageClick = (values) => {
        props.sendMessage(values.newMessageElement);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageForm onSubmit={onSendMessageClick} />
            </div>
        </div>
    );
}

const AddMessageForm = (props) => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm()

    const onSubmitHandler = (data) => {
        props.onSubmit(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <textarea placeholder='Enter your massege' {...register('newMessageElement')}/>
            <div><input type='submit'/></div>
        </form>
    )
}

export default Dialogs;
