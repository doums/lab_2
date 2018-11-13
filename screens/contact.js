import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native'
import Contacts from 'react-native-contacts';
import Spinner from '../components/spinner'
import navigationHoc from '../components/navigationHoc'

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
    console.log(item)
    return <Text style={styles.text}>{item.givenName}</Text>
  }

  render () {
    const { fetching, contacts } = this.state
    if (fetching) return <Spinner/>
    return (
      <View style={styles.container}>
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

export default navigationHoc(Contact)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#29434e'
  },
  list: {
    padding: 20
  },
  text: {
    color: 'white',
    fontSize: 20,
  }
})
