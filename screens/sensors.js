import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { decorator as rnSensors } from 'react-native-sensors'
import { compose } from 'lodash/fp'
import navigationHoc from '../components/navigationHoc'
import Chart from '../components/chart'
import withTheme from '../components/withTheme'
import withStatusBar from '../components/withStatusBar'
import withActionBar from '../components/withActionBar'

const Sensors = props => {
  const { sensorsFound, Accelerometer, theme } = props
  if (!Accelerometer) {
    return <View style={[ styles.container, { backgroundColor: theme.background } ]}/>
    }
  if (!sensorsFound['Accelerometer']) {
    return (
      <View style={styles.container} >
        <Text style={styles.text}>Acceleration is not available</Text>
      </View>
    )
  }
  const x = Number.parseFloat(Accelerometer.x.toFixed(2)) + 10
  const y = Number.parseFloat(Accelerometer.y.toFixed(2)) + 10
  const z = Number.parseFloat(Accelerometer.z.toFixed(2)) + 10
  return (
    <Chart
      x={x}
      y={y}
      z={z}
    />
  )
}

export default compose(
  navigationHoc,
  withStatusBar,
  withActionBar,
  withTheme,
  rnSensors({
    Accelerometer: {
      updateInterval: 300
    },
    Gyroscope: true
  })
)(Sensors)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#29434e'
  },
  text: {
    color: 'white',
    fontSize: 16,
    margin: 5
  }
})
