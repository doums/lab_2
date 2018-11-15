import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native'
import Contacts from 'react-native-contacts';
import Spinner from '../components/spinner'
import { compose } from 'lodash/fp'
import withTheme from '../components/withTheme'
import withActionBar from '../components/withActionBar'

class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      contacts: [],
      fetching: true
    }
  }

  componentDidMount () {
    Contacts.getAll((err, contacts) => {
      if (err) return console.warn(err)
      this.setState({
        fetching: false,
        contacts
      })
    })
  }

  keyExtractor = item => item.rawContactId

  renderItem = ({ item }) => {
    const { theme } = this.props
    return <Text style={[ styles.text, { backgroundColor: theme.background, color: theme.onBackground } ]}>{item.givenName}</Text>
  }

  render () {
    const { theme } = this.props
    const { fetching, contacts } = this.state
    if (fetching) return <Spinner/>
    return (
      <View style={[ styles.container, { backgroundColor: theme.background } ]}>
        <FlatList
          data={contacts}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          style={styles.list}
        />
      </View>
    )
  }
}

export default compose(
  withActionBar,
  withTheme,
)(Contact)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  list: {
    padding: 20
  },
  text: {
    fontSize: 20,
    fontFamily: 'Lekton-Regular'
  }
})
