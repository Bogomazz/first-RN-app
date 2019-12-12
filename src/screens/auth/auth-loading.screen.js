import React, { Component } from 'react-native';
import { AuthService } from '../../services/auth.service';

export class AuthLoadingScreen extends Component {

    componentDidMount() {
        const authToken = AuthService.getToken();
        this.props.navigation.navigate(authToken ? 'Rooms' : 'Auth');
    }

    render() {
        return (
            <>
                <Text>Initialization. Wait a moment, please...</Text>
            </>
        )
    }
}