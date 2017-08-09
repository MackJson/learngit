import React, {Component, PropTypes} from 'react';
import ReactNative, {Text, View, StyleSheet, Platform, TouchableOpacity, TouchableNativeFeedback, Image} from 'react-native';
import px2dp from '../Utils/px2dp'
import theme from '../Utils/theme'

export default class CustomImgView extends Component{

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
        imgSize: px2dp(40),
        fontSize: px2dp(16)
    };
    render(){
        const {text, image, color, imgSize, fontSize, btnStyle} = this.props;
        return(
            <View style={[styless.view, btnStyle]}>
                <Text style={[styless.text, {fontSize: fontSize, color: color}]}>{text}</Text>
                <Image source={image} style={{width: imgSize, height: imgSize}}/>
            </View>
        );
    }


}

const styless = StyleSheet.create({
    view:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: 'rgba(255,255,255,0.7)',
        marginTop: px2dp(4)
    }
});
