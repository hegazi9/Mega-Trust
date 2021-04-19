/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import RootNavigator from './Navigation/RootNavigator';
import { createStore , applyMiddleware  } from 'redux' ;
import { Provider } from 'react-redux' ;
import Reducers from './Reducers';
import ReduxThunk from  'redux-thunk';
import { StatusBar } from 'react-native';
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage : AsyncStorage ,
}

const persistedReducer = persistReducer(persistConfig, Reducers);

const store = createStore(
  persistedReducer,
  applyMiddleware(  ReduxThunk )
);

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Provider store={store}>
        <RootNavigator /> 
        <StatusBar backgroundColor={'white'} barStyle="light-content" />
        </Provider>

      </>
    );
  }
}

export default App;