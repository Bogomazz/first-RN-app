import { createStackNavigator } from 'react-navigation-stack';
import { RoomsScreen } from '../screens/rooms/rooms.screen';

export const RoomsStack = createStackNavigator({
    Rooms: RoomsScreen
});