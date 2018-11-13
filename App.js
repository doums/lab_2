/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Home from './screens/home'
import Battery from './screens/battery'
import Geolocation from './screens/geolocation'
import Contact from './screens/contact'
import Language from './screens/language'
import AppVibration from './screens/appVibration'
import Sensors from './screens/sensors'

const RootStack = createStackNavigator(
  {
    Home: Home,
    Battery: Battery,
    Geolocation: Geolocation,
    Contact: Contact,
    Language: Language,
    Vibration: AppVibration,
    Sensors: Sensors
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#546e7a',
      },
      headerTitleStyle: {
        minWidth: 300,
        color: 'white'
      },
      headerTintColor: '#fff'
    }
  })

const App = () => <RootStack/>
export default App
