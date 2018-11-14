import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BatteryModule from '../BatteryModule'
import Spinner from '../components/spinner'
import { compose } from 'lodash/fp'
import withTheme from '../components/withTheme'
import withActionBar from '../components/withActionBar'

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
    const { theme } = this.props
    const { battery } = this.state
    if (!battery) return <Spinner/>
    let plugged = ''
    if (battery && battery.acCharge) {
      plugged = 'ac'
    } else if (battery && battery.usbCharge) {
      plugged = 'usb'
    }
    const textStyle = [ styles.text, { color: theme.onBackground } ]
    return (
      <View style={[ styles.container, { backgroundColor: theme.background } ]}>
        <Text style={textStyle}>level: { battery.level }</Text>
        <Text style={textStyle}>state: { battery.isCharging ? 'charging' : 'discharging' }</Text>
        {
          battery.isCharging === true && plugged.length > 0 &&
          <Text style={textStyle}>plugged: { plugged }</Text>
        }
      </View>
    )
  }
}

export default compose(
  withActionBar,
  withTheme,
)(Battery)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    margin: 5,
    fontFamily: 'Lekton-Regular'
  }
})
