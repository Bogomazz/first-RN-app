import React, { Component } from 'react';
import {
  View,
  Button,
  TextInput
} from 'react-native';
import { AuthService } from '../../services/auth.service';

export class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          nick: '',
          password: ''
        };
      }
    
      register = async () => {
        const user = await AuthService.register(this.state);
        if (user) {
          this.props.navigation.navigate('Rooms')
        } else {
          alert('Something went wrong');
        }
      }
    
      render() {
        return (
          <>
            <View style={{padding: 40}}>
              <TextInput
                placeholder="Email"
                onChangeText={(text) => this.setState({email: text})}
                value={this.state.email}
              />
              <TextInput
                
                placeholder="Login"
                onChangeText={(text) => this.setState({nick: text})}
                value={this.state.nick}
              />
              <TextInput
                
                placeholder="Name"
                onChangeText={(text) => this.setState({name: text})}
                value={this.state.name}
              />
              <TextInput
                
                placeholder="Password"
                onChangeText={(text) => this.setState({password: text})}
                value={this.state.password}
              />
              <Button
                onPress={ this.register}
                title="Register"
              />
            </View>
          </>
        );
      }
}