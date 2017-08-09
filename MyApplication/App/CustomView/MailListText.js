/**
 * Created by Administrator on 2017/5/8.
 */
import React, {Component, PropTypes} from 'react';
import ReactNative, {Text, View,Dimensions, StyleSheet, Platform, TouchableOpacity, TouchableNativeFeedback, Image} from 'react-native';
import px2dp from '../Utils/px2dp'
import theme from '../Utils/theme'

export default class MailListText extends Component{

    static propTypes = {
        text: PropTypes.string,
        image: PropTypes.number,
        onPress: PropTypes.func,
        imgSize: PropTypes.number,
        fontSize: PropTypes.number,
        color: PropTypes.string,
        btnStyle: View.propTypes.style
    };
    static defaultProps = {
        imgSize: px2dp(30),
        fontSize: px2dp(16)
    };
    render(){
        const {text, color,fontSize} = this.props;
        return(
            <View style={styles.view}>
                <Image source={require('../Images/bumen.png')} style={{flex:1,marginLeft:10,width:px2dp(40), height:px2dp(40),resizeMode: 'contain'}}/>
                <Text style={[styles.text, {fontSize: 18, color: color}]}>{text}</Text>
                <View style={{flex:1}}/>
                <View style={{flex:1}}/>
                <View style={{flex:1}}/>
                <Image source={require('../Images/into.png')} style={{width:px2dp(18), height: px2dp(18),marginRight:15,resizeMode: 'contain'}}/>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    view:{
        width: Dimensions.get('window').width,
        height:60,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'#fff',
        justifyContent: 'center'
    },
    text:{
        width:80,
        marginLeft:15,
        color: 'rgba(255,255,255,0.7)',
    }
});
