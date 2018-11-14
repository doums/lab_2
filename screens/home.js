import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  PermissionsAndroid,
  Platform
} from 'react-native'
import Button from '../components/button'
import navigationHoc from '../components/navigationHoc'
import { compose } from 'lodash/fp'
import withTheme from '../components/withTheme'
import withStatusBar from '../components/withStatusBar'
import withActionBar from '../components/withActionBar'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ready: false
    }
  }

  async componentDidMount () {
    if (Platform.OS === 'android') {
      const result = await Home.requestAndroidPermissions()
      const values = Object.values(result)
      if (!values.find(status => status === 'denied')) {
        this.setState({ ready: true })
      }
    } else {
      this.setState({ ready: true })
    }
  }

  static async requestAndroidPermissions() {
    try {
      return await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      ])
    } catch (err) {
      console.warn(err)
    }
  }

  render () {
    const { ready } = this.state
    const { theme } = this.props
    if (ready) {
      return (
        <View style={[ styles.container, { backgroundColor: theme.background } ]}>
          {
            Platform.OS === 'android' &&
            <Button
              text='Battery'
              onPress={() => this.props.navigation.navigate('Battery')}
            />
          }
          <Button
            text='Geolocation'
            onPress={() => this.props.navigation.navigate('Geolocation')}
          />
          <Button
            text='Contacts'
            onPress={() => this.props.navigation.navigate('Contact')}
          />
          <Button
            text='Language'
            onPress={() => this.props.navigation.navigate('Language')}
          />
          <Button
            text='Vibration'
            onPress={() => this.props.navigation.navigate('Vibration')}
          />
          <Button
            text='Sensors'
            onPress={() => this.props.navigation.navigate('Sensors')}
          />
        </View>
      )
    } else {
      return (
        <View style={[ styles.container, { backgroundColor: theme.background } ]}>
          <Text style={[ styles.text, { color: theme.onBackground } ]}>This app requires specific permissions to work properly</Text>
        </View>
      )
    }
  }
}

export default compose(
  withStatusBar,
  withActionBar,
  withTheme,
  navigationHoc
)(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  text: {
    fontSize: 16,
    paddingHorizontal: 10
  }
})
