/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { AppContainer } from './src/navigator/app.container'
import reducers from './src/store/reducers';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(reducers)
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
  
};

export default App;
