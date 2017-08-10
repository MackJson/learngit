/**
 * Created by Administrator on 2017/5/5.
 */
import React, { Component ,PropTypes} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    Platform,
    Button,
    Dimensions,
    PixelRatio,
    TouchableNativeFeedback,
    TouchableOpacity,
    ToastAndroid,
    } from 'react-native';
    import px2dp from '../Utils/px2dp';
    import Icon from 'react-native-vector-icons/Ionicons';
    import theme from '../Utils/theme';
    import Avatar from '../Utils/Avatar';

    export default class TextUtils extends Component{

        static propTypes = {
            image:PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            title_size:PropTypes.number.isRequired,
            onPress: PropTypes.func
        }
// <Text style={{ fontSize: context_size}}>{context}</Text>
        render(){
            const {title, title_size,image,context,textcolor} = this.props;
        return(
            <View style={styles.actionBars}>
                <View style={styles.intros}>
                <View style={{marginLeft: px2dp(12)}}>
                    <Text style={{color: textcolor, fontSize: title_size}}>{title}</Text>
                </View>
                <View style={{flex:1}}/>
                <View style={{marginRight:px2dp(10)}}>
                <Avatar image={image} size={px2dp(50)} textSize={px2dp(30)}/>
                </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    actionBars: {
        // flex: 1,
        flexDirection:'row',
        marginRight:px2dp(10),
        marginLeft:px2dp(10),
        borderRadius:5,
        // backgroundColor: theme.actionBar.backgroundColor,
        // alignItems: 'center',
        justifyContent: 'flex-start',
    },
    intros: {
        // width: Dimensions.get('window'),
        flex: 1,
        height:  Dimensions.get('window').height/6,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        padding: px2dp(12),
        borderRadius:6,
        borderTopWidth: 1 / PixelRatio.get(),
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#c4c4c4',
        borderTopColor: '#e4e4e4',
        marginTop: px2dp(10)
    }
});
