import {FC, ReactNode, useEffect} from 'react';
import {
  useDerivedValue,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import {AnimatedView} from './styles';

/**
 * Types
 */

interface AnimatedBikeProps {
  children: ReactNode;
}

enum motionRange {
  START = 0,
  END = 1,
}

/**
 * Constants
 */

const MOTION_DURATION = 2000;

/**
 * AnimatedBike
 */

export const AnimatedBike: FC<AnimatedBikeProps> = ({children}) => {
  const motion = useSharedValue(motionRange.START);

  const x = useDerivedValue(() => {
    return interpolate(
      motion.value,
      [motionRange.START, motionRange.END],
      [300, 200],
    );
  });

  const y = useDerivedValue(() => {
    return interpolate(
      motion.value,
      [motionRange.START, motionRange.END],
      [10, 50],
    );
  });

  const motionStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: x.value,
      },
      {
        translateY: y.value,
      },
    ],
  }));

  useEffect(() => {
    motion.value = withTiming(motionRange.END, {
      duration: MOTION_DURATION,
      easing: Easing.inOut(Easing.ease),
    });
  }, [motion]);

  return <AnimatedView style={motionStyle}>{children}</AnimatedView>;
};
