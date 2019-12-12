import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';
import LoginComponent from '../screens/auth/containers/login';
import { RegisterScreen } from '../screens/auth/register.screen';

export const AuthStack = createStackNavigator({
    Login: LoginComponent,
    Register: RegisterScreen, 
}, {
    initialRouteName: 'Login',
});