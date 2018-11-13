import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from '../components/button'
import { Vibration } from 'react-native'
import navigationHoc from '../components/navigationHoc'
import { compose } from 'lodash/fp'
import withTheme from '../components/withTheme'
import withStatusBar from '../components/withStatusBar'

const AppVibration = ({ theme }) => {
  const vibrate = () => {
    Vibration.vibrate(500, true)
  }

  return (
    <View style={[ styles.container, { backgroundColor: theme.background } ]}>
      <Button
        onPress={vibrate}
        text='Press me!'
      />
    </View>
  )
}

export default compose(
  withStatusBar,
  withTheme,
  navigationHoc
)(AppVibration)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
