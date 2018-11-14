import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Spinner from '../components/spinner'
import RNLanguages from 'react-native-languages'
import navigationHoc from '../components/navigationHoc'
import { compose } from 'lodash/fp'
import withTheme from '../components/withTheme'
import withStatusBar from '../components/withStatusBar'
import withActionBar from '../components/withActionBar'

class Language extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lang: null,
      text: null
    }
  }

  componentDidMount () {
    if (Platform.OS === 'android') {
      RNLanguages.addEventListener('change', ({ language, languages }) => {
        this.setState({ lang: language })
        this.setSampleText()
      })
    }
    this.setState({ lang: RNLanguages.language })
    this.setSampleText()
  }

  setSampleText () {
    switch (RNLanguages.language) {
      case 'fr-FR':
        this.setState({ text: 'Bonjour le Monde' })
        break
      case 'sv-SE':
        this.setState({ text: 'Hej Världen' })
        break
      default:
        this.setState({ text: 'Hello World' })
    }
  }

  render () {
    const { theme } = this.props
    const { lang, text } = this.state
    if (!lang) return <Spinner/>
    const textStyle = [ styles.text, { color: theme.onBackground } ]
    return (
      <View style={[ styles.container, { backgroundColor: theme.background } ]}>
        <Text style={textStyle}>language: { lang }</Text>
        <Text style={textStyle}>{ text }</Text>
      </View>
    )
  }
}

export default compose(
  navigationHoc,
  withStatusBar,
  withActionBar,
  withTheme,
)(Language)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    margin: 5
  }
})
