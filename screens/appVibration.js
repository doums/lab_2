import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from '../components/button'
import { Vibration } from 'react-native'
import navigationHoc from '../components/navigationHoc'

const AppVibration = () => {
  const vibrate = () => {
    Vibration.vibrate(500, true)
  }

  return (
    <View style={styles.container}>
      <Button
        onPress={vibrate}
        text='Press me!'
      />
    </View>
  )
}

export default navigationHoc(AppVibration)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#29434e'
  }
})
