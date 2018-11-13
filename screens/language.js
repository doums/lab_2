import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Spinner from '../components/spinner'
import RNLanguages from 'react-native-languages'
import navigationHoc from '../components/navigationHoc'

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
    const { lang, text } = this.state
    if (!lang) return <Spinner/>
    return (
      <View style={styles.container}>
        <Text style={styles.text}>language: { lang }</Text>
        <Text style={[styles.text, { fontStyle: 'italic' }]}>{ text }</Text>
      </View>
    )
  }
}

export default navigationHoc(Language)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#29434e'
  },
  text: {
    color: 'white',
    fontSize: 16,
    margin: 5
  }
})
