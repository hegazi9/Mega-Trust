/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import RootNavigator from './Navigation/RootNavigator';
import { createStore , applyMiddleware  } from 'redux' ;
import { Provider } from 'react-redux' ;
import Reducers from './Reducers';
import ReduxThunk from  'redux-thunk';
import { StatusBar } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Provider store={createStore(Reducers , {}  , applyMiddleware(ReduxThunk))}>
        <RootNavigator /> 
        <StatusBar backgroundColor={'white'} barStyle="light-content" />
        </Provider>

      </>
    );
  }
}

export default App;