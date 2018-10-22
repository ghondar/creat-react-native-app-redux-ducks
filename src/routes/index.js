import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { NativeRouter, Route } from 'react-router-native'

import Home from 'containers/home'

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
  }
})

export default App
