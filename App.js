/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import Home from './screens/home'
import Battery from './screens/battery'
import Geolocation from './screens/geolocation'
import Contact from './screens/contact'
import Language from './screens/language'
import AppVibration from './screens/appVibration'
import Sensors from './screens/sensors'
import { ScrollView, StyleSheet } from 'react-native'

const MaterialTheme = {
  primary: '#e91e63',
  primaryLight: '#ff6090',
  primaryDark: '#b0003a',
  secondary: '#9575cd',
  secondaryLight: '#c7a4ff',
  secondaryDark: '#65499c',
  background: '#212121',
  surface: '#212121',
  onPrimary: '#000000',
  onSecondary: '#000000',
  onBackground: '#ffffff',
  onSurface: '#ffffff'
}

export const ThemeContext = React.createContext(MaterialTheme)

const ContentComponent = props => (
  <ScrollView style={{ backgroundColor: '#9575cd' }}>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
)

const DrawerNavigator = createDrawerNavigator({
  Home: Home,
  Battery: Battery,
  Geolocation: Geolocation,
  Contact: Contact,
  Language: Language,
  Vibration: AppVibration,
  Sensors: Sensors
}, {
  initialRouteName: 'Home',
  contentComponent: ContentComponent
})

const App = () => (
  <ThemeContext.Provider value={MaterialTheme}>
    <DrawerNavigator/>
  </ThemeContext.Provider>
)
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9575cd'
  }
})