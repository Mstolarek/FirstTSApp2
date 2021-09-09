import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import Animated, {
  Easing,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {useSharedValue} from 'react-native-reanimated';
import {useAnimatedProps} from 'react-native-reanimated';
import {useDerivedValue} from 'react-native-reanimated';
import {mix} from 'react-native-redash';
import Svg, {Circle, Path, Rect} from 'react-native-svg';
import DummyArray from '../../components/Dummyarray';

import ContentCarousel from './ContetnCarousel/ContentCarousel';
import WaveBorder from './WaveBorder/WaveBorder';

const ContentScreen = () => {
  return (
    <View style={styles.container}>
      <WaveBorder />
      {/* <Text style={styles.Text}>This is Content Box</Text> */}

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
