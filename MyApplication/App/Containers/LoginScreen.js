import React, { Component,PropTypes } from 'react'
import {
  View,
  ScrollView,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  ToastAndroid,
  BackHandler,
  Navigator,
  Platform,
  LayoutAnimation,
  Picker
} from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/LoginScreenStyles'
import { NavigationActions } from 'react-navigation';
import {Images, Metrics} from '../Themes'
import LoginActions from '../Redux/LoginRedux'

import EditView from '../CustomView/EditView'
import LoginButton from '../CustomView/LoginButton'
import FJSON from 'format-json'



class LoginScreen extends Component {

    static navigationOptions={
     header:null
    }

  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func
  }

  // isAttempting = false
  keyboardDidShowListener = {}
  keyboardDidHideListener = {}

  constructor (props) {
    super(props)
    this.state = {
      username: '15309912829',
      password: '15309912829',
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth },
    }
    this.isAttempting = false

  }

  componentWillReceiveProps (newProps) {
    this.forceUpdate()
    // Did the login attempt complete?
    if(newProps.equipmentname_payload)
    {

    }
    if ( !newProps.fetching) {
    if(newProps.error == null && newProps.username != "")
    {
      if (newProps.response.Ret == 0) {
          // 登录成功
        this.props.navigation.navigate('HomePageScreen', {Mobile:newProps.response.Mobile})
        ToastAndroid.show(newProps.response.Msg, ToastAndroid.SHORT)
      }else{
      ToastAndroid.show(newProps.response.Msg, ToastAndroid.SHORT)
      }
    }
  }
}



  componentWillMount () {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardDidShow = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
      topLogo: {width: 100, height: 50}
    })
  }

  keyboardDidHide = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight,
      topLogo: {width: Metrics.screenWidth}
    })
  }

  handlePressLogin = () => {
    const { username, password} = this.state
    this.isAttempting = true
    // attempt a login - a saga is listening to pick it up from here.
    this.props.attemptLogin(username, password)
  }

  handleChangeUsername = (text) => {
    this.setState({ username: text })
  }

  handleChangePassword = (text) => {
    this.setState({ password: text })
  }

  render () {
    const { username, password } = this.state
    const { fetching } = this.props
    const editable = !fetching
    const textInputStyle = editable ? styles.textInput : styles.textInputReadonly
    return (
      <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={[styles.container, {height: this.state.visibleHeight}]} keyboardShouldPersistTaps='always'>
        <Image source={Images.logo} style={[styles.topLogo, this.state.topLogo]} />
        <View>
          <Text style={{fontSize: 20,color:"#000",marginTop:10,textAlign:'center'}}>仪表机具管理</Text>
        </View>
        <View style={styles.cameraContainer}>
      </View>
        <View style={[styles.card, { backgroundColor: '#fff' }]}>
          <EditView name='用户名' why={false} img={require('../Images/username.png')} onChange={this.handleChangeUsername} val={username} edt={editable} onSubmit={() => this.refs.password.focus()}/>
          <EditView name='密  码' why={true} img={require('../Images/password.png')} onChange={this.handleChangePassword} val={password} edt={editable} onSubmit={this.handlePressLogin}/>
          </View>
          <LoginButton name='登录' onPressCallback={this.handlePressLogin}/>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.login.fetching,
    response: state.login.response,
    error: state.login.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
