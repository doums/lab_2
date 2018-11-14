import React, { Component } from 'react'
import findScreenTitle from '../helpers/findScreenTitle'
import Icon from 'react-native-vector-icons/MaterialIcons'
import findRouteIcon from '../helpers/findRouteIcon'
import ThemeContext from '../constants/themeContext'

const navigationHoc = WrappedComponent => {
  return class NavigationHoc extends Component {
    componentDidMount() {
      this.props.navigation.setParams({ theme: this.context })
    }

    static navigationOptions = ({ navigation }) => {
      const { state: { routeName }, getParam } = navigation
      const theme = getParam('theme')
      return {
        drawerLabel: findScreenTitle(routeName),
        drawerIcon: () => (
          <Icon
            name={findRouteIcon(routeName)}
            size={24}
            color={theme ? theme.onPrimary : 'black'}
          />
        )
      }
    }

    static contextType = ThemeContext

      render () {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default navigationHoc