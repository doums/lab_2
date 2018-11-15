import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { compose } from 'lodash/fp'
import withTheme from '../components/withTheme'
import withActionBar from '../components/withActionBar'
import moment from 'moment'

class Time extends Component {
  constructor (props) {
    super(props)
    this.state = { time: moment().format('YYYY-MM-DD HH:mm:ss') }
    this.intervalId = setInterval(() => this.setState({ time: moment().format('YYYY-MM-DD HH:mm:ss') }), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.intervalId)
  }

  render () {
    const { theme } = this.props
    const { time } = this.state
    return (
      <View style={[ styles.container, { backgroundColor: theme.background } ]}>
        <Text style={[ styles.text, { color: theme.onBackground } ]}>
          { time }
        </Text>
      </View>
    )
  }
}

export default compose(
  withActionBar,
  withTheme,
)(Time)

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
