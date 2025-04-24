import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToprops = (dispatch) => {
    return {
        updateNewMessageBody: (newTextBody) => {
            dispatch(updateNewMessageBodyCreator(newTextBody));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToprops)(Dialogs);

export default DialogsContainer;
