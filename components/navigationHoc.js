import React, { Component } from 'react'
import findScreenTitle from '../helpers/findScreenTitle'

const navigationHoc = WrappedComponent => {
  return class extends Component {
    static navigationOptions = ({ navigation }) => {
      const { state: { routeName } } = navigation
      return {
        title: findScreenTitle(routeName)
      }
    }
    render () {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default navigationHoc