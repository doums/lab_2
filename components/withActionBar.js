import React from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import withTheme from './withTheme'
import Icon from 'react-native-vector-icons/MaterialIcons'
import findScreenTitle from '../helpers/findScreenTitle'

const withActionBar = WrappedComponent => {
  const actionBarHoc = props => (
    <View style={{ flex: 1 }}>
      <View style={[ styles.actionBarContainer, { backgroundColor: props.theme.primary } ]} >
        <View style={styles.actionBarContent}>
          <View style={styles.navigationIcon}>
            <Icon
              name='menu'
              size={24}
              color={props.theme.onPrimary}
              onPress={() => props.navigation.openDrawer()}
            />
          </View>
          <Text style={[ styles.title, { color: props.theme.onPrimary } ]}>{ findScreenTitle(props.navigation.state.routeName) }</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={[ styles.scrollViewContainer, { backgroundColor: props.theme.background } ]}
      >
        <WrappedComponent {...props} />
      </ScrollView>
    </View>
  )
  return withTheme(actionBarHoc)
}

export default withActionBar

const styles = StyleSheet.create({
  actionBarContainer: {
    height: 56,
    padding: 16,
    elevation: 4,
    shadowColor: 'black',
    shadowRadius: 10
  },
  actionBarContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  navigationIcon: {
    marginRight: 32
  },
  title: {
    fontSize: 20,
    minWidth: 500,
    fontFamily: 'Lekton-Bold'
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})