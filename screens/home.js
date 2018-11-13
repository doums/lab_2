import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  PermissionsAndroid,
  Platform,
  ScrollView
} from 'react-native'
import Button from '../components/button'

export default class Home extends Component {
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

  static navigationOptions = {
    title: 'Home'
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
    if (ready) {
      return (
        <ScrollView
          contentContainerStyle={styles.container}
        >
          {
            Platform.OS === 'android' &&
            <Button
              text='Battery'
              onPress={() => this.props.navigation.navigate('Battery', { screenTitle: 'Battery' })}
            />
          }
          <Button
            text='Geolocation'
            onPress={() => this.props.navigation.navigate('Geolocation', { screenTitle: 'Geolocation' })}
          />
          <Button
            text='Contacts'
            onPress={() => this.props.navigation.navigate('Contact', { screenTitle: 'Contacts' })}
          />
          <Button
            text='Language'
            onPress={() => this.props.navigation.navigate('Language', { screenTitle: 'Language' })}
          />
          <Button
            text='Vibration'
            onPress={() => this.props.navigation.navigate('Vibration', { screenTitle: 'Vibration' })}
          />
          <Button
            text='Sensors'
            onPress={() => this.props.navigation.navigate('Sensors', { screenTitle: 'Sensors' })}
          />
        </ScrollView>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>This app requires specific permissions to work properly</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#29434e'
  },
  text: {
    fontSize: 16,
    color: 'white',
    paddingHorizontal: 10
  }
})
