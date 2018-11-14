import React from 'react'
import {
  StyleSheet,
  View,
  Platform
} from 'react-native'
import Button from '../components/button'
import navigationHoc from '../components/navigationHoc'
import { compose } from 'lodash/fp'
import withTheme from '../components/withTheme'
import withActionBar from '../components/withActionBar'

const Home = ({ theme, navigation: { navigate } }) => (
  <View style={[ styles.container, { backgroundColor: theme.background } ]}>
    {
      Platform.OS === 'android' &&
      <Button
        text='Battery'
        onPress={() => navigate('Battery')}
      />
    }
    <Button
      text='Geolocation'
      onPress={() => navigate('Geolocation')}
    />
    <Button
      text='Contacts'
      onPress={() => navigate('Contact')}
    />
    <Button
      text='Language'
      onPress={() => navigate('Language')}
    />
    <Button
      text='Vibration'
      onPress={() => navigate('Vibration')}
    />
    <Button
      text='Sensors'
      onPress={() => navigate('Sensors')}
    />
  </View>
)

export default compose(
  navigationHoc,
  withActionBar,
  withTheme
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
