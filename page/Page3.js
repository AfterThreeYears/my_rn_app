/**
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class Page3 extends Component<Props> {
  render() {
    const { navigation: { state: { params }, setParams } } = this.props;
    const showText = params && params.mode === 'edit' ? '正在编辑' : '编辑完成';
    return (
      <View style={styles.container}>
        <Text>{showText}</Text>
        <Text>Page3</Text>
        <TextInput
          style={styles.input}
          onChangeText={title => setParams({ title })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
  input: {
    borderWidth: 1,
    height: 50,
    marginTop: 10,
    borderColor: 'red',
  }
});
