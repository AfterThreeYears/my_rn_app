/**
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class Page4 extends Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text>Page4</Text>
        <Button title={'open'}
          onPress={() => navigation.openDrawer()}
        >
          open
        </Button>
        <Button title={'close'}
          onPress={() => navigation.closeDrawer()}
        >
          close
        </Button>
        <Button title={'toggle'}
          onPress={() => navigation.toggleDrawer()}
        >
          toggle
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
