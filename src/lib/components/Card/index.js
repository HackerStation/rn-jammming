import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../../styles';

export const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary,
    borderRadius: 4,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    width: '92%',
    opacity: 0.8,
    padding: 20,
  },
});
