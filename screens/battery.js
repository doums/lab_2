import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BatteryModule from '../BatteryModule'
import Spinner from '../components/spinner'
import navigationHoc from '../components/navigationHoc'

class Battery extends Component {
  constructor (props) {
    super(props)
    this.state = { battery: null }
  }

  async componentDidMount () {
    this.intervalID = setInterval(async () => {
      const { level, acCharge, usbCharge, isCharging } = await BatteryModule.getBatteryStatus()
      this.setState({ battery: {
          level,
          acCharge,
          usbCharge,
          isCharging
        }})
    }, 500)
  }

  componentWillUnmount () {
    clearInterval(this.intervalID)
  }

  render () {
    const { battery } = this.state
    if (!battery) return <Spinner/>
    let plugged = ''
    if (battery && battery.acCharge) {
      plugged = 'ac'
    } else if (battery && battery.usbCharge) {
      plugged = 'usb'
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>level: { battery.level }</Text>
        <Text style={styles.text}>state: { battery.isCharging ? 'charging' : 'discharging' }</Text>
        {
          battery.isCharging === true && plugged.length > 0 &&
          <Text style={styles.text}>plugged: { plugged }</Text>
        }
      </View>
    )
  }
}

export default navigationHoc(Battery)

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
