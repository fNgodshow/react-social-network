import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const DialogsContainer = () => {
    const dialogsPage = useSelector(state => state.dialogsPage);
    const dispatch = useDispatch();

    const sendMessage = (newMessageElement) => {
        dispatch(sendMessageCreator(newMessageElement));
    };

    return <Dialogs dialogsPage={dialogsPage} sendMessage={sendMessage} />;
};

export default withAuthRedirect(DialogsContainer);
