import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Track = ({ name, artist, album }) => {
  return (
    <View style={styles.track}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.container}>
        <Text style={styles.body}>{artist}</Text>
        <Text style={styles.body}> | </Text>
        <Text style={styles.body}>{album}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    color: '#ccc',
    fontSize: 15,
  },
  container: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 10,
  },

  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  track: {
    marginBottom: 10,
  },
});
