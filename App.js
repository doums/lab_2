import React from 'react'
import ThemeContext, { MaterialTheme } from './constants/themeContext'
import Permissions from './screens/permissions'

const App = () => (
  <ThemeContext.Provider value={MaterialTheme}>
    <Permissions />
  </ThemeContext.Provider>
)
export default App