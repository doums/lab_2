import React, { Component } from 'react'
import {StyleSheet, Text, TextInput, View} from 'react-native'
import { compose } from 'lodash/fp'
import withTheme from '../components/withTheme'
import Button from '../components/button'
import colors from '../constants/colors'

class AddColor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      color: '',
      error: ''
    }
  }

  addColor = () => {
    const { addColor } = this.props
    const { color } = this.state
    if (!color) return
    const normalizedColor = color.toLocaleLowerCase()
    if (!colors.find(validColor => validColor === normalizedColor)) {
      this.setState({ error: 'bad color name' })
      return
    }
    addColor(normalizedColor)
    this.setState({
      color: '',
      error: ''
    })
  }

  render () {
    const { theme } = this.props
    const { color, error } = this.state
    const textStyle = [ styles.text, { color: theme.onBackground } ]
    return (
      <View style={[ styles.container, { backgroundColor: theme.background } ]}>
        { error.length > 0 &&
        <Text style={textStyle}>Bad color name :(</Text>
        }
        <TextInput
          style={[ styles.text, styles.textInput, { color: theme.onBackground, borderColor: theme.onBackground} ]}
          placeholder='enter a color name'
          placeholderTextColor={theme.onBackground}
          onChangeText={color => this.setState({ color })}
          onSubmitEditing={() => this.addColor()}
          value={color}
        />
        <Button
          text='ADD'
          onPress={() => this.addColor()}
          disabled={color.length === 0}
        />
      </View>
    )
  }
}

export default compose(
  withTheme,
)(AddColor)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
  }
})
