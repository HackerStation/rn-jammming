import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Header, SearchBar } from './src/sections';
import { fetchTracks } from './src/lib/api';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleUserSearch = async (userInput) => {
    const results = await fetchTracks(userInput.split(' ').join('%20'));
    setSearchResults(results);
  };

  return (
    <View style={styles.container}>
      <Header />
      <ImageBackground
        source={require('./src/assets/images/background_photo.jpg')}
        style={styles.backgroundImage}
        resizeMode='cover'
      >
        <SearchBar onUserSearch={handleUserSearch} />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            paddingVertical: 30,
            width: 300,
          }}
        >
          <Text>SearchResults</Text>
          <Text>TrackList</Text>
          <Text>Playlist</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#6B2A8A',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});
