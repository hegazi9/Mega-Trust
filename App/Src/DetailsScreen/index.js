import React, {Component} from 'react';
import {View} from 'react-native';
import Details from './Details';

class index extends Component {

  render() {
    return (
      <View>
        <Details navigation={this.props.navigation}/>
      </View>
    );
  }
}

export default index;