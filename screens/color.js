import React, { Component } from 'react'
import { BackHandler, StyleSheet, Text, TextInput, View, FlatList } from 'react-native'
import { compose } from 'lodash/fp'
import withTheme from '../components/withTheme'
import withActionBar from '../components/withActionBar'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AddColor from '../components/addColor'

class Color extends Component {
  constructor (props) {
    super(props)
    this.state = {
      colors: [
        { name: 'tomato', key: 'qsdlkfjs' },
        { name: 'lime', key: 'qdsfc' },
        { name: 'peru', key: 'qscffdfsfg' }
      ],
      key: 0,
      adding: false
    }
    this.didFocusSubscription = props.navigation.addListener('didFocus', () =>
      BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    )
  }

  componentDidMount() {
    this.setActionItems()
    this.willBlurSubscription = this.props.navigation.addListener('willBlur', () =>
      BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    )
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      actionBar: { setActionItems, setTitle, setNavigationIcon },
      theme,
      navigation: { openDrawer }
    } = this.props
    const { adding } = this.state
    const { adding: prevAdding } = prevState
    if (adding !== prevAdding && adding) {
      setNavigationIcon(<Icon
        name='arrow-back'
        size={24}
        color={theme.onPrimary}
        onPress={() => this.setState({ adding: false })}
      />)
      setTitle('Add a color')
      setActionItems(null)
    } else if (adding !== prevAdding && !adding) {
      setNavigationIcon(<Icon
        name='menu'
        size={24}
        color={theme.onPrimary}
        onPress={() => openDrawer()}
      />)
      setTitle('Color')
      this.setActionItems()
    }
  }

  addColor = () => {
    this.setState({ adding: true })
  }

  onAddColor = addedColor => {
    const { colors, key } = this.state
    this.setState({
      colors: [ { name: addedColor, key: (key + 1).toString() }, ...colors ],
      adding: false,
      key: key + 1
    })
  }

  removeColor = key => {
    const { colors } = this.state
    this.setState({ colors: colors.filter(color => color.key !== key)})
  }

  setActionItems = () => {
    const { actionBar: { setActionItems }, theme } = this.props
    const addColorAction = (
      <Icon
        name='add'
        size={24}
        color={theme.onPrimary}
        onPress={this.addColor}
      />
    )
    setActionItems(addColorAction)
  }

  componentWillUnmount() {
    this.didFocusSubscription && this.didFocusSubscription.remove()
    this.willBlurSubscription && this.willBlurSubscription.remove()
  }

  onBackButtonPressAndroid = () => {
    const { adding } = this.state
    if (adding) {
      this.setState({ adding: false })
      return true
    }
    return false
  }

  renderItem = ({ item }) => {
    const { theme } = this.props
    const textStyle = [ styles.text, { color: theme.onBackground } ]
    return (
      <View style={styles.row}>
        <View style={[ styles.colorBox, { backgroundColor: item.name } ]} />
        <Text style={textStyle}>{ item.name }</Text>
        <View style={styles.deleteIcon}>
          <Icon
            name='delete'
            size={24}
            color={theme.primary}
            onPress={() => this.removeColor(item.key)}
          />
        </View>
      </View>
    )
  }

  render () {
    const { theme } = this.props
    const { colors, adding } = this.state
    if (adding) return <AddColor addColor={this.onAddColor} />
    return (
      <View style={[ styles.container, { backgroundColor: theme.background } ]}>
        <FlatList
          data={colors}
          renderItem={this.renderItem}
          style={styles.list}
        />
      </View>
    )
  }
}

export default compose(
  withActionBar,
  withTheme,
)(Color)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  text: {
    fontSize: 16,
    margin: 5,
    fontFamily: 'Lekton-Regular'
  },
  textInput: {
    borderWidth: 1,
    width: 200,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  list: {
    padding: 20
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  colorBox: {
    width: 20,
    height: 20,
    marginRight: 20
  },
  deleteIcon: {
    marginLeft: 'auto'
  }
})
