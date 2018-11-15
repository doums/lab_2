import React from 'react'
import {
  StyleSheet,
  View,
  Platform
} from 'react-native'
import Button from '../components/button'
import { compose } from 'lodash/fp'
import withTheme from '../components/withTheme'
import withActionBar from '../components/withActionBar'

const Home = ({ theme, navigation: { navigate } }) => (
  <View style={[ styles.container, { backgroundColor: theme.background } ]}>
    {
      Platform.OS === 'android' &&
      <Button
        text='BATTERY'
        onPress={() => navigate('Battery')}
      />
    }
    <Button
      text='LOCATION'
      onPress={() => navigate('Geolocation')}
    />
    <Button
      text='CONTACTS'
      onPress={() => navigate('Contact')}
    />
    <Button
      text='LANG'
      onPress={() => navigate('Language')}
    />
    <Button
      text='VIBRATION'
      onPress={() => navigate('Vibration')}
    />
    <Button
      text='SENSORS'
      onPress={() => navigate('Sensors')}
    />
    <Button
      text='BUTTON EX'
      onPress={() => navigate('ButtonExample')}
    />
    <Button
      text='COLOR'
      onPress={() => navigate('Color')}
    />
  </View>
)

export default compose(
  withActionBar,
  withTheme
)(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  text: {
    fontSize: 16,
    paddingHorizontal: 10
  }
})
