import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  ActivityIndicator,
} from "react-native";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import { Card } from "react-native-paper";

const { width } = Dimensions.get("window");

const ImageCarousel = () => {
  const [imageUrl, setImageUrl] = useState("https://robohash.org/c45.png");
  const [loading, setLoading] = useState(false); // Loading state

  const generateRandomImage = () => {
    setLoading(true); // Show loading indicator
    const randomString = Math.random().toString(36).substring(2, 8);
    setImageUrl(`https://robohash.org/${randomString}.png`);

    // Simulate loading time (optional, for demonstration)
    setTimeout(() => {
      setLoading(false); // Hide loading indicator once image is fetched
    }, 1000);
  };

  const onSwipeHandler = (event) => {
    if (
      event.nativeEvent.translationX < -50 ||
      event.nativeEvent.translationX > 50
    ) {
      generateRandomImage();
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <PanGestureHandler onGestureEvent={onSwipeHandler}>
        <View style={styles.imageContainer}>
          <Text style={styles.infoText}>Swipe to see a new robot!</Text>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" /> // Show loader
          ) : (
            <Card style={{ backgroundColor: "white" }}>
              <Image
                source={{ uri: imageUrl }}
                style={styles.image}
                resizeMode="contain"
              />
            </Card>
          )}
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "green",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width * 0.4,
    height: width * 0.4,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
    color: "green",
  },
});

export default ImageCarousel;
