import React, { Component,PropTypes } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    Modal,
    } from 'react-native';
export default class CustomLoad extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return(
            <Modal
                transparent = {true}
                onRequestClose={()=> this.onRequestClose()}
                >
                <View style={styles.loadingBox}>
                    <ActivityIndicator styleAttr='Inverse' size={60} color='#FF4500' />
                    <Text style={{fontSize: 16,color: '#000', marginTop:5}}>加载中...</Text>
                </View>
            </Modal>
        );
    }

}

const styles = StyleSheet.create({
    loadingBox: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0, 0, 0, 0.5)',
    }
});
