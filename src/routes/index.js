/**
 * @format
 * @flow
 */

import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NativeRouter, Route } from 'react-router-native'

import Home from 'containers/home'

export default function Routes() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route component={Home} exact path='/' />
      </View>
    </NativeRouter>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding  : 10
  }
})
