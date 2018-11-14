/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import ThemeContext, { MaterialTheme } from './constants/themeContext'
import Navigator from './components/navigator'

const App = () => (
  <ThemeContext.Provider value={MaterialTheme}>
    <Navigator />
  </ThemeContext.Provider>
)
export default App
