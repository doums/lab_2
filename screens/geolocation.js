import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Spinner from '../components/spinner'
import navigationHoc from '../components/navigationHoc'

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
    const { coords } = this.state
    if (!coords) return <Spinner/>
    return (
      <View style={styles.container}>
        <Text style={styles.text}>latitude: { coords.latitude }</Text>
        <Text style={styles.text}>longitude: { coords.longitude }</Text>
        <Text style={styles.text}>altitude: { coords.altitude }</Text>
      </View>
    )
  }
}

export default navigationHoc(Geolocation)

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
