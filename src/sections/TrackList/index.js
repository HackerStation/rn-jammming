import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Track } from '../../sections';

export const TrackList = ({ tracks }) => {
  return (
    <View style={styles.trackList}>
      {tracks.map((track) => {
        return (
          <Track
            key={track.id}
            name={track.name}
            artist={track.artists[0].name}
            album={track.album.name}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  trackList: {
    paddingVertical: 10,
    width: '100%',
  },
});
