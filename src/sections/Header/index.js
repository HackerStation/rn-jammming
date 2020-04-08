import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Ja</Text>
      <Text style={styles.titleAccent}>mmm</Text>
      <Text style={styles.title}>ing</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: '#010C3F',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  titleAccent: {
    color: '#6B40EA',
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
});
