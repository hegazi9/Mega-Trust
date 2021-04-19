/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Src/HomeScreen/index';
import LoginScreen from '../Src/LoginScreen/index';
import DetailsScreen from '../Src/DetailsScreen/index';
import SplashScreen from '../Src/SplashScreen/index';
import AddScreen from '../Src/AddScreen/index';


const Home = ({ navigation }) => <HomeScreen navigation={navigation} />
const Login = ({ navigation }) => <LoginScreen navigation={navigation} />
const Details = ({ navigation }) => <DetailsScreen navigation={navigation} />
const Splash = ({ navigation }) => <SplashScreen navigation={navigation} />
const Add = ({ navigation }) => <AddScreen navigation={navigation} />


const Stack = createStackNavigator();
const TOKEN = null ;
class RootNavigator extends React.Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;

  }
  
  render() {
    return (
      <NavigationContainer >
        <Stack.Navigator screenOptions={{
          headerShown: false
        }} initialRouteName= "Splash">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Add" component={Add} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default RootNavigator;