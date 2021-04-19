import React  , { Component} from 'react';
import { View } from 'react-native';
import Splash from './Splash';

 class index extends Component 
{
  render()
    {
      return (
        <View>
         <Splash navigation={this.props.navigation} />
        </View>
      );

    }
     
 
  }


export default index ;
