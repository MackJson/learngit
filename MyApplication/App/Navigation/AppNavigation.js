import { StackNavigator } from 'react-navigation'
import ManngerScreen from '../Containers/ManngerScreen'
import ReasticScreen from '../Containers/ReasticScreen'
import OrderScreen from '../Containers/OrderScreen'
import AlarmsScreen from '../Containers/AlarmsScreen'
import MyScreen from '../Containers/MyScreen'
import HomePageScreen from '../Containers/HomePageScreen'
import LoginScreen from '../Containers/LoginScreen'
import SimpleListView from '../Containers/SimpleListView'
import LaunchScreen from '../Containers/LaunchScreen'
import RootContainer from '../Containers/RootContainer'

import styles from './Styles/NavigationStyles'
import Button from '../CustomView/Button'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
// Manifest of possible screens
const PrimaryNav = StackNavigator({
  ManngerScreen: { screen: ManngerScreen,
    navigationOptions: ({navigation}) => StackOptions({navigation})},
  ReasticScreen: { screen: ReasticScreen,
    navigationOptions: ({navigation}) => StackOptions({navigation})},
  OrderScreen: { screen: OrderScreen,
    navigationOptions: ({navigation}) => StackOptions({navigation})},
  AlarmsScreen: { screen: AlarmsScreen,
    navigationOptions: ({navigation}) => StackOptions({navigation})},
  MyScreen: { screen: MyScreen,
    navigationOptions: ({navigation}) => StackOptions({navigation})},
  HomePageScreen: { screen: HomePageScreen,
    navigationOptions: ({navigation}) => StackOptions({navigation})},
  LoginScreen: { screen: LoginScreen,
    navigationOptions: ({navigation}) => StackOptions({navigation})},
  SimpleListView: { screen: SimpleListView,
    navigationOptions: ({navigation}) => StackOptions({navigation})},
  LaunchScreen: { screen: LaunchScreen,
    navigationOptions: ({navigation}) => StackOptions({navigation})},
}, {
  // Default config for all screens
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

const StackOptions = ({navigation}) => {
    let {state,goBack} = navigation;
    const headerStyle = {backgroundColor:'rgb(22,131,251)'};
    // const headerTitle = state.params.title;
    const headerTitleStyle = {fontSize:18,
        color:'white',fontWeight:'500'}
    const headerBackTitle = false;
    const headerLeft = (
        <Button
            isCustom={true}
            customView={
                            <Icon
                                name='arrow-back'
                                size={30}
                                color='white'
                                style={{marginLeft:12}}
                            />
                        }
            onPress={()=>{goBack()}}
        />
    );

    return {headerStyle,headerTitleStyle,headerBackTitle,headerLeft}
};

export default PrimaryNav
