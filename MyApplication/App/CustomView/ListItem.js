/**
 * Created by Administrator on 2017/5/8.
 */
import React, {Component, PropTypes} from 'react';
import ReactNative, {Text, View, StyleSheet, Platform, TouchableOpacity, TouchableNativeFeedback, Image} from 'react-native';
import px2dp from '../Utils/px2dp'
import theme from '../Utils/theme'

export default class ListItem extends Component{

    static propTypes = {
        text: PropTypes.string,
        onPress: PropTypes.func,
        fontSize: PropTypes.number,
        color: PropTypes.string,
        colors: PropTypes.string,
        //name:PropTypes.string,
        //context:PropTypes.string,
        btnStyle: View.propTypes.style
    };

    render(){
        const {title,color, context, fontSize, btnStyle,name} = this.props;
        return(
            <View style={[styles.view, btnStyle]}>
                <Text style={[styles.text, {fontSize: fontSize, color: color}]}>{title}</Text>
                <Text style={[styles.text, {fontSize: fontSize, color: color}]}>{context}</Text>
                <Text style={[styles.text, {fontSize: fontSize, color: color}]}>{name}</Text>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    view:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: 'rgba(255,255,255,0.7)',
        marginTop: px2dp(2)
    }
});
