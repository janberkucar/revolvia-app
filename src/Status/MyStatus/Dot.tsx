// * IMPORTS --------------------------------------------------------------
import React from "react";
import Animated, { interpolate, Extrapolate } from "react-native-reanimated";

// #region CONST --------------------------------------------------------
// * INTERFACE ------------------------------------------------------------
interface DotProps {
  index: number;
  currentIndex: Animated.Node<number>;
}
//#endregion
const Dot = ({ index, currentIndex }: DotProps) => {
  // * ANIMATION VARS ------------------------------------------------------
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });

  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  //#region Screen. DOTS ------------------------------------
  return (
    <Animated.View
      style={{
        opacity,
        backgroundColor: "#0C0D34",
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 4,
        transform: [{ scale }],
      }}
    />
  );
};
//#endregion

export default Dot;
