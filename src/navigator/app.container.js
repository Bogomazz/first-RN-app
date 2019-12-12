import { createAppContainer, createSwitchNavigator } from 'react-navigation';


import { AuthStack } from './auth.stack';
import { RoomsStack } from './rooms.stack';

const RootStack = createSwitchNavigator(
    {
      Auth: AuthStack,
      Rooms: RoomsStack,
    },
    {
      initialRouteName: 'Auth',
    }
);
  
export const AppContainer = createAppContainer(RootStack);