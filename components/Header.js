import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My ToDos </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 38,
    backgroundColor: 'coral',
    height: 80,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
