import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import withTheme from './withTheme'

const Button = props => (
  <TouchableOpacity
    style={[ styles.button, { backgroundColor: props.theme.primary } ]}
    onPress={() => props.onPress()}
    activeOpacity={0.5}
  >
    <Text style={[ styles.text, { color: props.theme.onPrimary } ]}>{props.text}</Text>
  </TouchableOpacity>
)
export default withTheme(Button)

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    alignItems: 'center',
    padding: 10,
    minWidth: 200
  },
  text: {
    fontSize: 16
  }
})