import React from "react";
import { ActivityIndicator, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const LoadingOverlay = () => {
  return (
    <View
      style={{
        backgroundColor: GlobalStyles.colors.primary700, 
        padding: 24,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

export default LoadingOverlay;
