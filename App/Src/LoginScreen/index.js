import React  , { Component} from 'react';
import { View } from 'react-native';
import Login from './Login';

 class index extends Component 
{
  render()
    {
      return (
        <View>
 <Login navigation={this.props.navigation} />
        </View>
      );

    }
     
 
  }


export default index ;
