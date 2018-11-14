/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import Home from '../screens/home'
import Battery from '../screens/battery'
import Geolocation from '../screens/geolocation'
import Contact from '../screens/contact'
import Language from '../screens/language'
import AppVibration from '../screens/appVibration'
import Sensors from '../screens/sensors'
import { ScrollView } from 'react-native'
import withTheme from './withTheme'

const Navigator = ({ theme }) => {
  const ContentComponent = props => (
    <ScrollView style={{ backgroundColor: theme.primary }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.primary }} forceInset={{ top: 'always', horizontal: 'never' }}>
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
    contentComponent: ContentComponent,
    contentOptions: {
      activeTintColor: theme.secondaryLight,
      activeBackgroundColor: theme.primaryDark,
      labelStyle: {
        minWidth: 500
      }
    }
  })
  return <DrawerNavigator />
}
export default withTheme(Navigator)