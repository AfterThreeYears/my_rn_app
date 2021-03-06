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
export default class HomePage extends Component<Props> {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text>HomePage</Text>
        <Button
          title={'go to page1'}
          onPress={() => navigation.navigate('Page1', { name: '动态的标题page1' })}
        />
        <Button
          title={'go to page2'}
          onPress={() => navigation.navigate('Page2')}
        />
        <Button
          title={'go to Top'}
          onPress={() => navigation.navigate('Top', { name: 'devIO' })}
        />
        <Button
          title={'go to Bottom'}
          onPress={() => navigation.navigate('Bottom', { name: 'devIO' })}
        />
        <Button
          title={'go to DrawerNav'}
          onPress={() => navigation.navigate('DrawerNav', { name: 'devIO' })}
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
