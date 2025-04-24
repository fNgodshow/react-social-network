import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messages.map(message => <Message key={message.id} message={message.message} id={message.id}/>);

    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
       let newTextBody = e.target.value;
       props.updateNewMessageBody(newTextBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onNewMessageChange}
                              ref={newMessageElement}
                              placeholder={`sdsd`}
                    value={props.dialogsPage.newMessageBody}></textarea>
                    <button onClick={onSendMessageClick} type="submit">Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
