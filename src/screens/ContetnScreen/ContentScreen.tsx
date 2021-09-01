import React from 'react';
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

const SIZE = Dimensions.get('window').width;
const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const ContentScreen = () => {
  const progress = useSharedValue(0);
  const randC1 = useSharedValue(0);
  const randC2 = useSharedValue(0);
  const randX2 = useSharedValue(0);
  const even = useSharedValue(false);
  useEffect(() => {
    progress.value = withRepeat(
      withTiming(
        1,
        {duration: 4000, easing: Easing.inOut(Easing.ease)},
        (x) => {
          // console.warn('rand.value', x, rand.value);
          if (even.value) {
            randC1.value = Math.random() * 4;
          }
          if (even.value) {
            randC2.value = Math.random() * 4;
            randX2.value = Math.random() * 5;
          }
          even.value = !even.value;
        },
      ),
      -1,
      true,
    );
  }, [progress]);
  const data = useDerivedValue(() => {
    return {
      from: {
        x: mix(progress.value, 0, 0),
        y: mix(progress.value, 0, 0),
      },
      c1: {
        x: mix(progress.value, 2.5, 2.5),
        y: mix(progress.value, 0, -randC1.value),
      },
      c2: {
        // x: mix(progress.value, 7.5, 7.5),
        x: mix(progress.value, 7.5, -randX2.value),
        y: mix(progress.value, 0, randC2.value),
      },
      to: {
        x: mix(progress.value, 10, 10),
        y: mix(progress.value, 0, 0),
      },
    };
  }, []);
  const path = useAnimatedProps(() => {
    const {from, c1, c2, to} = data.value;
    return {
      d: `M${from.x} ${from.y} C${c1.x} ${c1.y} ${c2.x} ${c2.y} ${to.x} ${to.y}`,
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

  return (
    <View style={styles.container}>
      {/* <Text style={styles.Text}>This is Content Box</Text> */}
      <Svg
        width={'100%'}
        height={'100%'}
        viewBox="0 -1 10 2.3"
        // preserveAspectRatio={'xMidYMid meet'}
      >
        {/* <Rect x={0} y={0} width={10} height={10} fill="orange" /> */}
        <AnimatedPath fill="brown" animatedProps={path} />
        <AnimatedCircle r={0.5} fill="pink" animatedProps={from} />
        <AnimatedCircle r={0.25} fill="pink" animatedProps={c1} />
        <AnimatedCircle r={0.25} fill="pink" animatedProps={c2} />
        <AnimatedCircle r={0.5} fill="pink" animatedProps={to} />
      </Svg>
      {/* <ContentCarousel data={DummyArray} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: -25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {fontSize: 24, alignSelf: 'center'},
});

export default ContentScreen;
