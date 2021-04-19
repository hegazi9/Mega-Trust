import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import style from './style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Get_All_Items } from '../../Actions/_get_all_items';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { Icon } from 'native-base';

let Email = null, Password = null, Img = null, ARR = []
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      arr: []
    }
    this.arr = []
  }

  async componentDidMount() {
    Email = await AsyncStorage.getItem('Email');
    Password = await AsyncStorage.getItem('Password');
    Img = await AsyncStorage.getItem('IMG');
    let Arr = await AsyncStorage.getItem('ARR');
    await this.props.Get_All_Items();

    ARR = [JSON.parse(Arr), ...this.props.items.data]

  }

  render() {
    return (
      <>
        {
          this.props.items.status == 500 || this.props.items.status == 400 ?
            <View>
              <Text>No Internet</Text>
            </View>
            :
            <>
              <View style={style.header}>
                <View style={style.view}>
                  <Text>{Email} </Text>
                  <Text>{Password}</Text>
                </View>
                <View style={style.view_img}>
                  <Image style={{ height: 50, width: 50, borderRadius: 30 }} source={{ uri: JSON.parse(Img) }} />
                </View>
              </View>
              {
                !this.props.loading ?
                  <>
                    <FlatList style={{ height: hp('85%') }}
                      showsHorizontalScrollIndicator={false}
                      data={ARR}
                      extraData={this.state}
                      keyExtractor={(item) => Math.random().toString()}
                      renderItem={({ item, index }) => (
                        <TouchableOpacity style={style.center}
                          onPress={() => {
                            alert(item.how_to_apply)
                            this.props.navigation.navigate('Details', {
                              'company': item.company, 'index': index,
                              'company_logo': item.company_logo,
                              'type': item.type, 'url': item.url, 'created_at': item.created_at,
                              'location': item.location, 'title': item.title, 'description': item.description,
                              'company_url': item.company_url
                            });
                          }}
                        >
                          <View style={{ flexDirection: 'column', width: '70%' }}>
                            <Text style={style.txt1}>Company Name :</Text>
                            <Text style={style.txt2}>{item.company} </Text>
                            <Text style={style.txt1}>Job Title :</Text>
                            <Text style={style.txt2} >{item.title}</Text>
                          </View>
                          <Image resizeMode="center" style={style.img}
                            source={{ uri: item.company_logo }} />

                        </TouchableOpacity>
                      )
                      } />
                    <TouchableOpacity style={style.btn} onPress={() => { this.props.navigation.navigate('Add') }}>
                      <Icon name="plus" type="AntDesign" style={{ fontSize: 20, color: 'white' }} />
                    </TouchableOpacity>
                  </>
                  :
                  <View style={style.loading}>
                    <ActivityIndicator animating size="large" color="#1B2631" />
                  </View>
              }
            </>
        }
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.items.loading,
    items: state.items.items,
  }
}

export default connect(mapStateToProps, { Get_All_Items })(Home);