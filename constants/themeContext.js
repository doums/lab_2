import React from 'react'

export const MaterialTheme = {
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

const ThemeContext = React.createContext(MaterialTheme)
export default ThemeContext