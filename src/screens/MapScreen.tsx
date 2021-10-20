import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView from 'react-native-maps';
import Searchbar from '../components/Searchbar';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Searchbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  map: {flex: 1},
  Text: {fontSize: 24, alignSelf: 'center'},
});

export default MapScreen;
