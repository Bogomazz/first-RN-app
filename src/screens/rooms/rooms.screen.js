import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

export class RoomsScreen extends Component {
    
    
    signIn = () => {
    alert(this.state);
    }

    render() {
        return (
            <>
            <View style={{padding: 40}}>
                <Text>
                    It's a room screen
                </Text>
            </View>
            </>
        );
    }
}