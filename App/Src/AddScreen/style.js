import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Platform } from 'react-native';

export default {

  viewInput:
  {
    marginTop: hp('1%'), marginRight: 'auto', marginLeft: 'auto',
    borderColor: '#1B2631', borderWidth: .5, borderRadius: 10,
    justifyContent: 'center',
    height: hp('8%'), width: wp('80%'), textAlign: 'left'
  },
  input:
  {
    fontSize: 14,
    padding: 10,
  },


  username:
  {
    fontSize: 14, paddingHorizontal: wp('10%'),
    marginTop: hp('5%'), textAlign: 'left'
  },

  btn:
  {
    marginTop: hp('3%'), marginLeft: 'auto', marginRight: 'auto',
    borderRadius: 10, alignItems: 'center',
    justifyContent: 'center', backgroundColor: '#1B2631',
    height: hp('8%'), width: wp('80%')
  },

  txt_btn:
  {
    fontSize: 18, color: 'white'
  },

  viewImg : 
  {
    alignItems : 'center' , justifyContent : 'center' , paddingTop : hp('10%')
  },
  img_btn : 
  {
    height : 100 , width : 100 ,borderRadius : 50   , padding  : 5 ,
      backgroundColor : 'white' , alignItems : 'center'
  },
  img : 
  {
    height : 100 , width : 100 ,borderRadius : 50  
  }


};