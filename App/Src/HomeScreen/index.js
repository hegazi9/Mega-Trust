import React, {Component} from 'react';
import {View} from 'react-native';
import Home from './Home';

class index extends Component {

  render() {
    return (
      <View>
        <Home navigation={this.props.navigation} />
      </View>
    );
  }
}

export default index;