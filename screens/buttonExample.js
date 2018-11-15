import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { compose } from 'lodash/fp'
import withTheme from '../components/withTheme'
import withActionBar from '../components/withActionBar'
import Button from '../components/button'

class ButtonExample extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count1: 4,
      count2: 8,
      count3: 2
    }
  }

  render () {
    const { theme } = this.props
    const { count1, count2, count3 } = this.state
    const textStyle = [ styles.text, { color: theme.onBackground } ]
    return (
      <View style={[ styles.container, { backgroundColor: theme.background } ]}>
        <View style={styles.row}>
          <Button
            text='BUTTON 1'
            onPress={() => this.setState({ count1: count1 + 1 })}
          />
          <Text style={textStyle}>{`count: ${count1}`}</Text>
        </View>
        <View style={styles.row}>
          <Button
            text='BUTTON 2'
            onPress={() => this.setState({ count2: count2 + 1 })}
          />
          <Text style={textStyle}>{`count: ${count2}`}</Text>
        </View>
        <View style={styles.row}>
          <Button
            text='BUTTON 3'
            onPress={() => this.setState({ count3: count3 + 1 })}
          />
          <Text style={textStyle}>{`count: ${count3}`}</Text>
        </View>
      </View>
    )
  }
}

export default compose(
  withActionBar,
  withTheme,
)(ButtonExample)

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
