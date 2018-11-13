import React from 'react'
import { StatusBar, View } from 'react-native'
import withTheme from './withTheme'

const withStatusBar = WrappedComponent => {
  const statusBarHoc = props => (
    <View style={{ flex: 1, backgroundColor: props.theme.primaryDark }}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={props.theme.primaryDark}
      />
      <WrappedComponent {...props} />
    </View>
  )
  return withTheme(statusBarHoc)
}

export default withStatusBar