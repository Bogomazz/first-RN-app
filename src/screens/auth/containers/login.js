import { connect } from 'react-redux'

import { AuthService } from "../../../services/auth.service";
import { ActionTypes } from "../../../store/actions";
import { LoginScreen } from "../login.screen";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        signIn: async ({email, password}) => {
            const user = await AuthService.login(email, password);
            if (user) {
                dispatch({type: ActionTypes.SAVE_USER_DATA, userInfo: user})
                ownProps.navigation.navigate('Rooms')
            } else {
                alert('Something went wrong');
            }
        }
    }
}

const LoginComponent = connect(
    null,
    mapDispatchToProps
)(LoginScreen)

export default LoginComponent;