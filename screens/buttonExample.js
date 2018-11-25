import React from 'react'
import { StyleSheet, View } from 'react-native'
import { compose } from 'lodash/fp'
import withTheme from '../components/withTheme'
import withActionBar from '../components/withActionBar'
import ButtonWithCount from '../components/buttonWithCount'

const ButtonExample = props => (
  <View style={[ styles.container, { backgroundColor: props.theme.background } ]}>
    <ButtonWithCount label='button 1' initCount={4} />
    <ButtonWithCount label='button 2' initCount={8} />
    <ButtonWithCount label='button 3' initCount={2} />
  </View>
)

export default compose(
  withActionBar,
  withTheme,
)(ButtonExample)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
