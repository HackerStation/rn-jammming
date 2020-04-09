import React, { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Header, SearchBar, TrackList } from './src/sections';
import { Card } from './src/lib/components';
import { fetchTracks } from './src/lib/api';

export default function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleUserSearch = async (userInput) => {
    const results = await fetchTracks(userInput.split(' ').join('%20'));
    setSearchResults(results.tracks.items.slice(0, 10));
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
        <View style={styles.cardContainer}>
          <Card>
            <Text style={styles.cardHeader}>Results</Text>
            <ScrollView style={styles.scrollView}>
              <TrackList tracks={searchResults} />
            </ScrollView>
          </Card>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  cardContainer: {
    alignItems: 'center',
    height: 400,
  },
  cardHeader: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#6B2A8A',
  },
});
