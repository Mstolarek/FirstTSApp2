import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>This is Map Box</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  Text: {fontSize: 24, alignSelf: 'center'},
});

export default MapScreen;
