import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { Colors } from '../../styles';

export const SearchBar = ({ onUserSearch }) => {
  const [userInput, setUserInput] = useState('');

  const onUserInput = (query) => {
    setUserInput(query);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder='Enter a song title'
        value={userInput}
        onChangeText={(query) => onUserInput(query)}
      />
      <View style={styles.searchButton}>
        <Button
          title='SEARCH'
          color={Colors.primary}
          onPress={() => onUserSearch(userInput)}
        />
      </View>
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
