import { StyleSheet ,Platform} from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import px2dp from '../../Utils/px2dp'
import theme from '../../Utils/theme'
export default StyleSheet.create({

  icon: {
      height: 25,
      width: 25,
      resizeMode: 'contain'
  },
  actionBar: {
      height: theme.actionBar.height,
      backgroundColor: theme.actionBar.backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: (Platform.OS === 'ios') ? px2dp(20) : 0,
  },
  containers: {
      flex: 1,
      backgroundColor: theme.pageBackgroundColor
  }
})
