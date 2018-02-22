import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.intro}>Bienvenue sur BeHere !</Text>
        <Text style={styles.intro}>Vous allez découvrir ici une multitude de breuvages plus incroyables les uns que les autres !</Text>
        <Text style={styles.intro}>Êtes vous prêts ? XoXo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  intro: {
    color: 'red',
    textAlign: 'center',
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => App);
