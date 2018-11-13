import React, { Component } from 'react'

const navigationHoc = WrappedComponent => {
  return class extends Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam('screenTitle', 'no title')
      }
    }
    render () {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default navigationHoc