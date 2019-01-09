/**
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, FlatList} from 'react-native';

type Props = {};
export default class Page1 extends Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text>Page1</Text>
        <Button
          title={'Go back'}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Button
          title={'Go page4'}
          onPress={() => {
            navigation.navigate('Page4');
          }}
        />
        <Button
          title={'Go FlatListDemo'}
          onPress={() => {
            navigation.navigate('FlatListDemo');
          }}
        />
        <Button
          title={'Go SwipeableFlatListDemo'}
          onPress={() => {
            navigation.navigate('SwipeableFlatListDemo');
          }}
        />
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
