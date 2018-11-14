import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Spinner from '../components/spinner'
import { compose } from 'lodash/fp'
import withTheme from '../components/withTheme'
import withActionBar from '../components/withActionBar'

class Geolocation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      coords: null
    }
  }

  async componentDidMount () {
    this.watchId = navigator.geolocation.watchPosition(
      data => this.setState({ coords: data.coords }),
      error => console.warn(error),
      {
        distanceFilter: 10
      }
    )
  }

  componentWillUnmount () {
    navigator.geolocation.clearWatch(this.watchId)
  }

  render () {
    const { theme } = this.props
    const { coords } = this.state
    const textStyle = [ styles.text, { color: theme.onBackground } ]
    if (!coords) return <Spinner/>
    return (
      <View style={[ styles.container, { backgroundColor: theme.background } ]}>
        <Text style={textStyle}>latitude: { coords.latitude }</Text>
        <Text style={textStyle}>longitude: { coords.longitude }</Text>
        <Text style={textStyle}>altitude: { coords.altitude }</Text>
      </View>
    )
  }
}

export default compose(
  withActionBar,
  withTheme,
)(Geolocation)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#29434e'
  },
  text: {
    fontSize: 16,
    margin: 5,
    fontFamily: 'Lekton-Regular'
  }
})
