import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { compose } from 'lodash/fp'
import withTheme from '../components/withTheme'
import Button from '../components/button'

class ButtonWithCount extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: props.initCount,
    }
  }

  render () {
    const { theme, label } = this.props
    const { count } = this.state
    const textStyle = [ styles.text, { color: theme.onBackground } ]
    return (
      <View style={[ styles.container, { backgroundColor: theme.background } ]}>
        <View style={styles.row}>
          <Button
            text={label}
            onPress={() => this.setState({ count: count + 1 })}
          />
          <Text style={textStyle}>{`count: ${count}`}</Text>
        </View>
      </View>
    )
  }
}

export default compose(
  withTheme
)(ButtonWithCount)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    margin: 5,
    fontFamily: 'Lekton-Regular',
    marginLeft: 20
  }
})
