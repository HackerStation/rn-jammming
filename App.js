import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Header } from './src/sections';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Image
        source={require('./src/assets/images/background_photo.jpg')}
        style={styles.backgroundImage}
        resizeMode='cover'
      />
      <Text>SearchBar</Text>
      <Text>SearchResults</Text>
      <Text>TrackList</Text>
      <Text>Playlist</Text>
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
