import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = props => (
  <TouchableOpacity
    style={styles.button}
    onPress={() => props.onPress()}
    activeOpacity={0.5}
  >
    <Text style={styles.text}>{props.text}</Text>
  </TouchableOpacity>
)
export default Button

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#546e7a',
    padding: 10,
    minWidth: 200
  },
  text: {
    fontSize: 16,
    color: 'white'
  }
})