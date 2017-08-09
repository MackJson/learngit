import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.backgroundColor
  },
  container:{
      flex: 1,
      backgroundColor:'#fff'
  },
  icon: {
      height: 22,
      width: 22
      // resizeMode: 'contain'
  }
})
