import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {useAnimatedProps} from 'react-native-reanimated';
import {useDerivedValue} from 'react-native-reanimated';
import Svg, {Circle, Path} from 'react-native-svg';
import DummyArray from '../../components/Dummyarray';

import ContentCarousel from './ContetnCarousel/ContentCarousel';

const SIZE = Dimensions.get('window').width;
const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const ContentScreen = () => {
  const data = useDerivedValue(() => {
    // return 5;
    return {
      from: {x: 0, y: 0},
      c1: {x: 0.2, y: 0.2},
      c2: {x: 0.4, y: 0.4},
      c3: {x: 0.6, y: 0.6},
      c4: {x: 0.8, y: 0.8},
      to: {x: 1, y: 1},
    };
  }, []);
  const path = useAnimatedProps(() => {
    const {from, c1, c2, c3, c4, to} = data.value;
    return {
      d: `M${from.x} ${from.y} C${c1.x} ${c1.y} C${c2.x} ${c2.y} C${c3.x} ${c3.y} C${c4.x} ${c4.y} C${to.x} ${to.y} L 1 1 L 0 1 Z`,
    };
  });
  const from = useAnimatedProps(() => {
    const {x, y} = data.value.from;
    return {
      cx: x,
      cy: y,
    };
  });
  const to = useAnimatedProps(() => {
    const {x, y} = data.value.to;
    return {
      cx: x,
      cy: y,
    };
  });
  const c1 = useAnimatedProps(() => {
    const {x, y} = data.value.c1;
    return {
      cx: x,
      cy: y,
    };
  });
  const c2 = useAnimatedProps(() => {
    const {x, y} = data.value.c2;
    return {
      cx: x,
      cy: y,
    };
  });
  const c3 = useAnimatedProps(() => {
    const {x, y} = data.value.c3;
    return {
      cx: x,
      cy: y,
    };
  });
  const c4 = useAnimatedProps(() => {
    const {x, y} = data.value.c4;
    return {
      cx: x,
      cy: y,
    };
  });
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>This is Content Box</Text>
      <Svg width={SIZE} height={SIZE} viewBox="0 0 1 1">
        <AnimatedPath fill="brown" animatedProps={path} />
        {/* <AnimatedCircle fill="blue" animatedProps={from} />
        <AnimatedCircle fill="teal" animatedProps={c1} />
        <AnimatedCircle fill="teal" animatedProps={c2} />
        <AnimatedCircle fill="teal" animatedProps={c3} />
        <AnimatedCircle fill="teal" animatedProps={c4} />
        <AnimatedCircle fill="blue" animatedProps={to} /> */}
      </Svg>
      {/* <ContentCarousel data={DummyArray} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  Text: {fontSize: 24, alignSelf: 'center'},
});

export default ContentScreen;
