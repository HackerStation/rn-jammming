import React, { useState } from 'react';
import { Button, Keyboard, StyleSheet, TextInput, View } from 'react-native';
import { Colors } from '../../styles';

export const SearchBar = ({ onUserSearch }) => {
  const [userInput, setUserInput] = useState('');

  const onUserInput = (query) => {
    setUserInput(query);
  };

  const handleUserSearch = () => {
    onUserSearch(userInput);
    setUserInput('');
    Keyboard.dismiss();
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
          onPress={handleUserSearch}
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
    fontSize: 16,
    justifyContent: 'center',
    marginBottom: 20,
    width: '60%',
    paddingHorizontal: 10,
  },
});
