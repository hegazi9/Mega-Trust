import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import style from './style';
import { useRoute } from '@react-navigation/native'
import { WebView } from 'react-native-webview';
import { heightPercentageToDP } from 'react-native-responsive-screen';


const Details = () => {
  const route = useRoute();

  return (
    <>
      <View style={style.header}>
        <View style={style.view}>
          <Text numberOfLines = {2} style={{ fontSize: 18 , width : 120  }}>{route.params.company}</Text>
           <Image resizeMode = "center" style={style.img} 
              source = {{uri : route.params.company_logo}}/>
               
        </View>
      </View>
      <ScrollView >
        <View style={style.center}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={style.txt1}>Company Name :</Text>
            <Text style={style.txt2}>{route.params.company}</Text>
            <Text style={style.txt1}>Job Title :</Text>
            <Text style={style.txt2} >{route.params.title}</Text>
            <Text style={style.txt1}>Type :</Text>
            <Text style={style.txt2}>{route.params.type}</Text>
            <Text style={style.txt1}>Date :</Text>
            <Text style={style.txt2} >{route.params.created_at}</Text>
            <Text style={style.txt1}>Url :</Text>
            <Text style={style.txt2}>{route.params.url}</Text>
            <Text style={style.txt1}>Company Url :</Text>
            <Text style={style.txt2} >{route.params.company_url}</Text>
            <Text style={style.txt1}>Location :</Text>
            <Text style={style.txt2}>{route.params.location}</Text>
            
            <Text style={style.txt1}>Description :</Text>
            {
              route.params.index == 0  ? 
              <Text style={style.txt2} >{route.params.description}</Text>
              :
            <WebView 
            style = {{ height : heightPercentageToDP('80%')}}
            source={{
              html: `
              ${route.params.description}    
            `,
            }}/>
            }
          </View>
          
        </View>

      </ScrollView>

    </>
  );

}

export default (Details);