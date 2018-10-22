/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { NativeRouter, Route, Link } from 'react-router-native'

function Home() {
  return <Text style={styles.header}>Home</Text>
}

function About() {
  return <Text style={styles.header}>About</Text>
}

function Topic({ match }) {
  return <Text style={styles.topic}>{match.params.topicId}</Text>
}

function Topics({ match }) {
  return (
    <View>
      <Text style={styles.header}>Topics</Text>
      <View>
        <Link style={styles.subNavItem} to={`${match.url}/rendering`} underlayColor='#f0f4f7'>
          <Text>Rendering with React</Text>
        </Link>
        <Link style={styles.subNavItem} to={`${match.url}/components`} underlayColor='#f0f4f7'>
          <Text>Components</Text>
        </Link>
        <Link style={styles.subNavItem} to={`${match.url}/props-v-state`} underlayColor='#f0f4f7'>
          <Text>Props v. State</Text>
        </Link>
      </View>

      <Route component={Topic} path={`${match.url}/:topicId`} />
      <Route exact path={match.url} render={() => <Text style={styles.topic}>Please select a topic.</Text>} />
    </View>
  )
}

function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link style={styles.navItem} to='/' underlayColor='#f0f4f7'>
            <Text>Home</Text>
          </Link>
          <Link style={styles.navItem} to='/about' underlayColor='#f0f4f7'>
            <Text>About</Text>
          </Link>
          <Link style={styles.navItem} to='/topics' underlayColor='#f0f4f7'>
            <Text>Topics</Text>
          </Link>
        </View>

        <Route component={Home} exact path='/' />
        <Route component={About} path='/about' />
        <Route component={Topics} path='/topics' />
      </View>
    </NativeRouter>
  )
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
