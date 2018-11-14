import React, { Component } from 'react'
import {
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native'
import ThemeContext, { MaterialTheme } from '../constants/themeContext'
import Navigator from '../components/navigator'
import withTheme from '../components/withTheme'

class Permissions extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ready: false
    }
  }

  async componentDidMount () {
    if (Platform.OS === 'android') {
      const result = await Permissions.requestAndroidPermissions()
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
    const { theme } = this.props
    const { ready } = this.state
    const textStyle = [ styles.text, { color: theme.onBackground } ]
    if (!ready) return (
      <View style={[ styles.container, { backgroundColor: theme.background } ]}>
        <StatusBar
          barStyle='light-content'
          backgroundColor={theme.primaryDark}
        />
        <Text style={textStyle}>Sorry :(</Text>
        <Text style={textStyle}>This app requires specific permissions to work properly!</Text>
      </View>
    )
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle='light-content'
          backgroundColor={theme.primaryDark}
        />
        <ThemeContext.Provider value={MaterialTheme}>
          <Navigator />
        </ThemeContext.Provider>
      </View>
    )
  }
}
export default withTheme(Permissions)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 14,
    paddingHorizontal: 10,
    fontStyle: 'italic'
  }
})