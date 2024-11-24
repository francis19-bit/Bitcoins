import { ImageBackground, View, StyleSheet, Text } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import imageitem from "../../../assets/favicon.png"; // Replace with your image path

const ScreenDemo = () => {
  const imageUrl = { uri: "https://robohash.org/c45.png" };
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.contentContainer}>
        <Animatable.Image
          source={imageUrl}
          style={styles.image}
          animation={"zoomIn"}
          duration={5000}
          iterationDelay={800}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default ScreenDemo;
