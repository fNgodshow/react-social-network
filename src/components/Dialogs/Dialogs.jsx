import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messages.map(message => <Message key={message.id} message={message.message} id={message.id}/>);

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
                <AddMessageFormRedux onSubmit={onSendMessageClick} />
            </div>
        </div>
    );
}

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit} action="">
        <Field component={'textarea'} name={'newMessageElement'} placeholder={'Enter your massege'} />
        <button>Send</button>
    </form>
}

const AddMessageFormRedux = reduxForm({form: 'addMessageForm'})(AddMessageForm)

export default Dialogs;
