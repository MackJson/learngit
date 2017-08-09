import React, { Component,PropTypes } from 'react';
import {
    ToolbarAndroid,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
    } from 'react-native';
export default class EditView extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    static propTypes = {
        onChange: PropTypes.func,
        onSubmit: PropTypes.func,
    };

    render() {
        const {img,why,val,edt,onSubmit,onChange} = this.props;
        return (
            <View style={LoginStyles.TextInputView}>
                <Image source={img} style={{width:40,height:40}}/>
                <TextInput style={LoginStyles.TextInput}
                           secureTextEntry={why}
                           underlineColorAndroid='transparent'
                           value={val}
                           editable={edt}
                           keyboardType='default'
                           returnKeyType='go'
                           autoCapitalize='none'
                           autoCorrect={false}
                           onSubmitEditing={onSubmit}
                           placeholder={this.props.name}
                           onChangeText={onChange}
                    />
            </View>
        );
    }
}


const LoginStyles = StyleSheet.create({
    TextInputView: {
        marginTop:-1,
        marginLeft:10,
        marginRight:10,
        height:55,
        backgroundColor: '#ffffff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#f08000',
        alignItems: 'center',
        flexDirection: 'row',
    },

    TextInput: {
        flex:1,
        marginTop:6,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        height:42,
    },
});
