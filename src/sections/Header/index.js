import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../styles';

export const Header = () => {
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
    backgroundColor: Colors.primary,
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
    color: Colors.accent,
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
});
