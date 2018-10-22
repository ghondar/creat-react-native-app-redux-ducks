import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { NativeRouter, Route } from 'react-router-native'

function Home() {
  return <Text style={styles.header}>Home</Text>
}

class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route component={Home} exact path='/' />
        </View>
      </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding  : 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection : 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex      : 1,
    alignItems: 'center',
    padding   : 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: 'center',
    fontSize : 15
  }
})

export default App
