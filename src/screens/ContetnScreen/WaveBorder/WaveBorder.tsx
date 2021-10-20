import React, {useEffect} from 'react';
import {useSharedValue} from 'react-native-reanimated';
import {View, StyleSheet} from 'react-native';
import {useDerivedValue} from 'react-native-reanimated';
import {mix} from 'react-native-redash';
import Svg, {Path, Circle} from 'react-native-svg';
import {useAnimatedProps} from 'react-native-reanimated';
import {Dimensions} from 'react-native';

import Animated, {
  Easing,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const SIZE = Dimensions.get('window').width;
const AnimatedPath = Animated.createAnimatedComponent(Path);

const WaveBorder = () => {
  const direction = useSharedValue<() => number>(() => {
    if (Math.random() > 0.5) {
      return -1;
    } else {
      return 1;
    }
  });
  const progress = useSharedValue(0);
  const randY1 = useSharedValue(0);
  const randY2 = useSharedValue(0);
  const randX1 = useSharedValue(0);
  const randX2 = useSharedValue(0);
  const randY11 = useSharedValue(0);
  const randY22 = useSharedValue(0);
  const randX11 = useSharedValue(0);
  const randX22 = useSharedValue(0);
  const randY111 = useSharedValue(0);
  const randY222 = useSharedValue(0);
  const randX111 = useSharedValue(0);
  const randX222 = useSharedValue(0);

  const even = useSharedValue(false);
  useEffect(() => {
    progress.value = withRepeat(
      withTiming(
        1,
        {duration: 2500, easing: Easing.inOut(Easing.ease)},
        (x) => {
          // console.warn('rand.value', x, rand.value);
          if (even.value) {
            randY1.value = Math.random() * 1.5;
            randX1.value = Math.random() * 2.5;
            randY2.value = Math.random() * 1.5;
            randX2.value = Math.random() * 2.5;
            randY11.value = Math.random() * 1.5;
            randX11.value = Math.random() * 2.5;
            randY22.value = Math.random() * 1.5;
            randX22.value = Math.random() * 2.5;
            randY111.value = Math.random() * 3.5;
            randX111.value = Math.random() * 1.5;
            randY222.value = Math.random() * 2.5;
            randX222.value = Math.random() * 0.5;
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
        x: mix(progress.value, -5, -5),
        y: mix(progress.value, 0, 0),
      },
      c1: {
        x: mix(progress.value, 2.5, 2.5 - randX1.value),
        y: mix(progress.value, 0, -randY1.value),
      },
      c2: {
        // x: mix(progress.value, 7.5, 7.5),
        x: mix(progress.value, 5, 5 + randX2.value),
        y: mix(progress.value, 0, -randY2.value),
      },

      to: {
        x: mix(progress.value, 7.5, 7.5),
        y: mix(progress.value, 0, 0),
      },
    };
  }, []);
  const data1 = useDerivedValue(() => {
    return {
      from: {
        x: mix(progress.value, 2.5, 2.5),
        y: mix(progress.value, 0, 0),
      },
      c1: {
        x: mix(progress.value, 5, 5 - randX11.value),
        y: mix(progress.value, 0, -randY11.value),
      },
      c2: {
        // x: mix(progress.value, 7.5, 7.5),
        x: mix(progress.value, 7.5, 7.5 + randX22.value),
        y: mix(progress.value, 0, -randY22.value),
      },

      to: {
        x: mix(progress.value, 15, 15),
        y: mix(progress.value, 0, 0),
      },
    };
  }, []);
  const data2 = useDerivedValue(() => {
    return {
      from: {
        x: mix(progress.value, 0, 0),
        y: mix(progress.value, 0, 0),
      },
      c1: {
        x: mix(progress.value, 3.33, 3.33 - randX11.value),
        y: mix(progress.value, 0, -randY11.value),
      },
      c2: {
        // x: mix(progress.value, 7.5, 7.5),
        x: mix(progress.value, 6.66, 6.66 + randX22.value),
        y: mix(progress.value, 0, -randY22.value),
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
  const path1 = useAnimatedProps(() => {
    const {from, c1, c2, to} = data1.value;
    return {
      d: `M${from.x} ${from.y} C${c1.x} ${c1.y} ${c2.x} ${c2.y} ${to.x} ${to.y}`,
    };
  });
  const path2 = useAnimatedProps(() => {
    const {from, c1, c2, to} = data2.value;
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
      <Svg
        width={'100%'}
        height={'100%'}
        viewBox="0 -1 10 2.3"
        // preserveAspectRatio={'xMidYMid meet'}
      >
        <AnimatedPath fill="white" animatedProps={path} />
        <AnimatedPath fill="orange" animatedProps={path2} />
        <AnimatedPath fill="white" animatedProps={path1} />
      </Svg>
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
    top: -45,
  },
});

export default WaveBorder;
