import React  , { Component} from 'react';
import { View } from 'react-native';
import Add from './Add';

 class index extends Component 
{
  render()
    {
      return (
        <View>
 <Add navigation={this.props.navigation} />
        </View>
      );

    }
     
 
  }


export default index ;
