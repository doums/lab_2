import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'

const Spinner = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#f5f5f5" />
  </View>
)
export default Spinner

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#29434e'
  }
})