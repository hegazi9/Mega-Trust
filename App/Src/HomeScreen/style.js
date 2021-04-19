import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Platform, Dimensions } from 'react-native';


export default {

  header:
  {
    height: Platform.OS == "ios" ? 100 :  70,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation : 3 , 
    flexDirection : 'row' 
  },

  view : 
  {
    flexDirection : 'column'  , padding : 15 , paddingTop : Platform.OS == "ios" ? 40 : 0 
  },
  view_img :
  {
    marginLeft : 'auto' , marginRight : wp('10%') , paddingTop : 5
  },


  center : 
  {
    backgroundColor: 'white',
    shadowColor: '#000',
    padding : 20 ,
    marginTop : 5 , 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation : 3 , 
    borderRadiuos : 20 , 
    flexDirection : 'row'
  },

  txt1 : 
  {
    fontSize : 16 , marginTop : 2 
  },
  
  txt2 : 
  {
    fontSize : 14 , marginTop : 2 ,color :'gray'
  },
  img : {
    height : 80 , width : 85, marginLeft : 'auto' ,
  },
  loading :
  {
    alignItems : 'center' , justifyContent : "center" , width : '100%' , height : '90%'
  },
  btn : 
  {
      backgroundColor: '#000',
      alignItems: 'center', justifyContent: 'center', position: 'absolute',
      height: 50, width: 50, borderRadius: 35, top:'90%',right: '10%',
    
  },
  img1 : 
  {
    height: 50, width: 50, borderRadius: 30 , marginTop : Platform.OS == "ios" ? 30 : 0  
  }
  
};