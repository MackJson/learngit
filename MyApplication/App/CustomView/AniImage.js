/**
 * Created by Administrator on 2017/5/22.
 */
import React, {Component,PropTypes} from 'react';
import {
    Animated,

    } from 'react-native';
export default class AniImage extends Component {
   static propTypes = {
       url: PropTypes.string,
       inputRange: PropTypes.array,
       outputRange: PropTypes.array
   };
   render () {
         var { style, url, inputRange, outputRange } = this.props
         this._animatedValue = new Animated.Value(0)
         let interpolatedColorAnimation = this._animatedValue.interpolate({
               inputRange: inputRange,
               outputRange: outputRange
         })
    return (
      <Animated.Image
         onLoadEnd={() => {
               Animated.timing(this._animatedValue, {
                     toValue: 100,
                     duration: 500
               }).start()
        }}
        source={{uri: url}}
        style={[style, {opacity: interpolatedColorAnimation}]} />
    )
  }
}
