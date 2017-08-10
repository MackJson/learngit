import React, { Component } from 'react'
import {  ScrollView,StatusBar,Dimensions,Text,View,BackAndroid,ToastAndroid,Platform, Image,KeyboardAvoidingView ,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import TextUtils from '../CustomView/TextUtils'
import px2dp from '../Utils/px2dp'
import theme from '../Utils/theme'
import MyScreen from '../Containers/MyScreen'
import { StackNavigator,TabNavigator } from 'react-navigation'
// Styles
import styles from './Styles/HomePageScreenStyle'

class HomePageScreen extends Component {
  static navigationOptions={
      header:null
  }

  render () {
    const {params} = this.props.navigation.state;
    const {navigate} = this.props.navigation;

    if (params.Level == 1) {
      return (
          <ScrollView>
          <StatusBar
             animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
             hidden={false}  //是否隐藏状态栏。
             backgroundColor={'rgb(22,131,251)'} //状态栏的背景色
             translucent={false}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
             barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')
            />
          <View style={styles.containers}>
              <View style={styles.actionBar}>
                  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                      <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>首页</Text>
                  </View>
              </View>
          </View>
          <View>
              <TouchableOpacity onPress={()=>{navigate('AlarmsScreen')}}>
                  <TextUtils image={require('../Images/yan.png')} textcolor='#7EC0EE' title="告警查询"   title_size={px2dp(20)}/>
              </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity onPress={()=>{navigate('OrderScreen',{name:'姚德涛',age:18})}}>
                  <TextUtils image={require('../Images/fa.png')} textcolor='#DDA0DD' title="我的工单"  title_size={px2dp(20)}/>
              </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity onPress={()=>{navigate('ReasticScreen',{name:'姚德涛',age:18})}}>
                  <TextUtils image={require('../Images/wei.png')} textcolor='#FF8247' title="工作写实"   title_size={px2dp(20)}/>
              </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity onPress={()=>{navigate('ManngerScreen',{name:'姚德涛',age:18})}}>
                  <TextUtils image={require('../Images/tong.png')} textcolor='#FFD39B' title="工单管理"  title_size={px2dp(20)}/>
              </TouchableOpacity>
          </View>
          </ScrollView>
      )
    }else {
      return (
          <ScrollView>
          <StatusBar
             animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
             hidden={false}  //是否隐藏状态栏。
             backgroundColor={'rgb(22,131,251)'} //状态栏的背景色
             translucent={false}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
             barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')
            />
          <View style={styles.containers}>
              <View style={styles.actionBar}>
                  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                      <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>首页</Text>
                  </View>
              </View>
          </View>
          <View>
              <TouchableOpacity onPress={()=>{navigate('AlarmsScreen')}}>
                  <TextUtils image={require('../Images/yan.png')} textcolor='#7EC0EE' title="告警查询"   title_size={px2dp(20)}/>
              </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity onPress={()=>{navigate('OrderScreen',{name:'姚德涛',age:18})}}>
                  <TextUtils image={require('../Images/fa.png')} textcolor='#DDA0DD' title="我的工单"  title_size={px2dp(20)}/>
              </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity onPress={()=>{navigate('ReasticScreen',{name:'姚德涛',age:18})}}>
                  <TextUtils image={require('../Images/wei.png')} textcolor='#FF8247' title="工作写实"   title_size={px2dp(20)}/>
              </TouchableOpacity>
          </View>
          </ScrollView>
      )
    }

  }
}
const MainScreenNavigator = TabNavigator({

   HomePageScreen: {
       screen: HomePageScreen,
       navigationOptions: ({navigation}) =>({
         tabBarLabel:'首页',
         tabBarIcon:({tintColor}) =>(
           <Image
             source={require('../Images/shouye.png')}
             style={[styles.icon, {tintColor: tintColor}]}
           />
         )
       })
   },

   MyScreen: {
       screen: MyScreen,
       navigationOptions: ({navigation}) =>({
         tabBarLabel:'我的',
         tabBarIcon:({tintColor}) =>(
           <Image
             source={require('../Images/wode.png')}
             style={[styles.icon, {tintColor: tintColor}]}
           />
         )
       })
     }
   },
   {
   animationEnabled: false, // 切换页面时不显示动画
   tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
   swipeEnabled: false, // 禁止左右滑动
   backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
   initialRouteName:'HomePageScreen',
   tabBarOptions: {
       activeTintColor: 'rgb(22,131,251)', // 文字和图片选中颜色
       inactiveTintColor: '#8E8E8E', // 文字和图片默认颜色
       activeBackgroundColor:'#fff',
       inactiveBackgroundColor:'#fff',
       showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
       indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
       style: {
           backgroundColor: '#FCFCFC', // TabBar 背景色
           height:60
       },
       labelStyle:{
         fontSize:10
       }

   },
});

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}
const Simple = StackNavigator({
    Home: {screen: MainScreenNavigator}
    // Chat:{screen:ChatScreen},

});

export default Simple
// export default connect(mapStateToProps, mapDispatchToProps)(HomePageScreen)
