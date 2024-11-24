import { StatusBar } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider, useTheme } from "react-native-paper";
import ScreenDemo from "../../ScreenDemo/ScreenDemo";
import MotherDataComponent from "../../MotherDataComponent/MotherDataComponent";
import AuthNavigator from "../../AuthNavigator/AuthNavigator";

const RootNavigator = () => {
  const theme = useTheme();
  const [showSplash, setShowSplash] = useState(true); // Control for splash screen

  useEffect(() => {
    // Show splash screen for 5 seconds
    const splashTimeout = setTimeout(() => {
      setShowSplash(false); // Hide splash
    }, 5000);

    return () => clearTimeout(splashTimeout); // Clear timeout if component unmounts
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#0E3113" />
      <PaperProvider>
        <MotherDataComponent />
        {showSplash ? (
          <ScreenDemo /> // Display splash screen
        ) : (
          <AuthNavigator /> // Navigate to Auth stack
        )}
      </PaperProvider>
    </NavigationContainer>
  );
};

export default RootNavigator;
