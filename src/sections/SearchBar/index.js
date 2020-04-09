import React from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors } from '../../styles';

export const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} />
      <TouchableOpacity>
        <View style={styles.searchButton}>
          <Button title='SEARCH' color={Colors.primary} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 50,
    width: '100%',
  },
  searchButton: {
    width: 100,
  },
  searchInput: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginBottom: 20,
    width: '60%',
  },
});
