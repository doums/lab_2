import React from 'react'
import { ThemeContext } from '../App'

const withTheme = WrappedComponent => {
  return props => (
    <ThemeContext.Consumer>
      {value => <WrappedComponent theme={value} {...props} />}
    </ThemeContext.Consumer>
  )
}

export default withTheme