import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Platform } from 'react-native';


export default {

  header:
  {
    height: 90,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 3,
    flexDirection: 'row'
  },

  view:
  {
    flexDirection: 'row', padding: Platform.OS == "ios" ? 30 : 15,
  },
  view_img:
  {
    marginLeft: 'auto', marginRight: wp('10%'), paddingTop: 5
  },

  txt3:
  {
    fontSize: 18, width: 130, height: 50, width: 120, borderRadius: 30, marginTop: Platform.OS == "ios" ? 10 : 0
  },
  center:
  {
    backgroundColor: 'white',
    shadowColor: '#000',
    padding: 20,
    height: '100%',
    marginTop: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 3,
    borderRadiuos: 20,
    flexDirection: 'row'
  },

  txt1:
  {
    fontSize: 16, marginTop: 2
  },

  txt2:
  {
    fontSize: 14, marginTop: 2, color: 'gray'
  },
  img: {
    height: 70, width: 75, marginLeft: wp('40%')
  }

};