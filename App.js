import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DescriptionScreen from './src/screens/DescriptionScreen';
import SplashScreen from './src/screens/SplashScreen';


import HomeScreen from './src/screens/HomeScreen';
import SelectedProductScreen from './src/screens/SelectedProductScreen';
const AppNavigator = createStackNavigator(
  {
    SplashScreen:SplashScreen,
    HomeScreen:HomeScreen,
    SelectedProductScreen:SelectedProductScreen,
    DescriptionScreen:DescriptionScreen
    
    
  },{
    headerMode: 'none'
  }
);
export default createAppContainer(AppNavigator)



