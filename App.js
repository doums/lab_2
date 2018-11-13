/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import Navigator from './components/navigator'

const MaterialTheme = {
  primary: '#e91e63',
  primaryLight: '#ff6090',
  primaryDark: '#b0003a',
  secondary: '#ff9800',
  secondaryLight: '#ffc947',
  secondaryDark: '#c66900',
  background: '#212121',
  surface: '#212121',
  onPrimary: '#000000',
  onSecondary: '#000000',
  onBackground: '#ffffff',
  onSurface: '#ffffff'
}

export const ThemeContext = React.createContext(MaterialTheme)

const App = () => (
  <ThemeContext.Provider value={MaterialTheme}>
    <Navigator />
  </ThemeContext.Provider>
)
export default App
