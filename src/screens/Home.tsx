import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ContentScreen from './ContetnScreen/ContentScreen';
import MapScreen from './MapScreen';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mapBox}>
        <MapScreen />
      </View>
      <View style={styles.contentBox}>
        <ContentScreen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},

  mapBox: {flex: 0.66, backgroundColor: 'red'},
  contentBox: {flex: 0.33, backgroundColor: 'green'},
});

export default HomeScreen;
