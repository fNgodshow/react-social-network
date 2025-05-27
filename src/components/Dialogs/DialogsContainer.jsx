import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToprops = (dispatch) => {
    return {
        sendMessage: (newMessageElement) => {
            dispatch(sendMessageCreator(newMessageElement));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToprops),
    withAuthRedirect
    )
(Dialogs);
