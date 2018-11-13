import React, { Component } from 'react'

const navigationHoc = WrappedComponent => {
  return class extends Component {
    static navigationOptions = ({ navigation }) => {
      const { state: { routeName } } = navigation
      let title
      switch (routeName) {
        case 'Home':
          title = 'Home'
          break
        case 'Battery':
          title = 'Battery'
          break
        case 'Geolocation':
          title = 'Geolocation'
          break
        case 'Contact':
          title = 'Contact'
          break
        case 'Language':
          title = 'Language'
          break
        case 'Vibration':
          title = 'Vibration'
          break
        case 'Sensors':
          title = 'Sensors'
          break
      }
      return {
        title
      }
    }
    render () {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default navigationHoc