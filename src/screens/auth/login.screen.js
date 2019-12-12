import React, { Component } from 'react';
import {
  View,
  Button,
  TextInput
} from 'react-native';
import PropTypes from 'prop-types'

export class LoginScreen extends Component {
  constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: ''
      };
  }
  
  render() {
    return (
      <>
        <View style={{padding: 40}}>
          <TextInput
            style={{height: 80}}
            placeholder="Email"
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
          />
          <TextInput
            style={{height: 80}}
            placeholder="Password"
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
          />
          <Button
            onPress={() => this.props.signIn(this.state)}
            title="Sign in"
          />

          <Button
            title="Go to register screen"
            onPress={() => this.props.navigation.navigate('Register')}
          />
        </View>
      </>
    );
  }
}

LoginScreen.propTypes = {
  signIn: PropTypes.func.isRequired
}