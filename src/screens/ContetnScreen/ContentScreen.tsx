import React from 'react';

import {View, StyleSheet} from 'react-native';

import DummyArray from '../../components/Dummyarray';

import ContentCarousel from './ContetnCarousel/ContentCarousel';
import WaveBorder from './WaveBorder/WaveBorder';

const ContentScreen = () => {
  return (
    <View style={styles.container}>
      <WaveBorder />

      <ContentCarousel data={DummyArray} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Text: {fontSize: 24, alignSelf: 'center'},
});

export default ContentScreen;
