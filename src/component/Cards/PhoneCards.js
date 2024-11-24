import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
} from "react-native";
import { Card } from "react-native-paper";
import { View } from "react-native";
// import imageitem from "../../../assets/images/socialmedialogos/apple.png";
import { TouchableOpacity } from "react-native";
// import imageitem1 from "../../../assets/FrankoLogo/frankoIcon.png";
import { Platform } from "react-native";

const { width, height } = Dimensions.get("window");

export default function PhoneCards({
  phoneName,
  amount,
  phoneBrand,
  handleItems,
  image,
}) {
  // Jux the height of the card and width
  // Width
  const getDynamicWith = () => {
    if (Platform.OS === "ios") {
      if (width < 375) return 10;
      if (width < 414) return 175;
      if (width < 2360) return 190;
      return 200; // Larger devices like iPhone Plus, Pro Max
    } else {
      // if (width < 375) return 160;
      if (width < 375) return 160;
      // if (width < 414) return 175;
      if (width < 414) return 170;
      if (width < 2360) return 200;
      // Mid-sized Android devices
      return "50%"; // Larger Android devices    gap: Platform.select({
    }
  };
  // Hieght
  const getDynamicHeight = () => {
    if (Platform.OS === "ios") {
      if (height < 667) return 10; // iPhone SE and smaller
      if (height < 736) return 270; // iPhone 6/7/8/X and similar
      if (height >= 1640) return 270; //  iPad Air (5th generation)
      return 260; // Larger devices like iPhone Plus, Pro Max
    } else {
      if (height < 640) return 910; // Smaller Android devices
      if (height < 3120) return 280; // Mid-sized Android devices
      return 200; // Larger Android devices
    }
  };
  // End of height of the card and width

  // Jux the height and width of the card
  const getDynamicHeightForCards = () => {
    if (Platform.OS === "ios") {
      if (height < 667) return 10; // iPhone SE and smaller
      if (height < 736) return 130; // iPhone 6/7/8/X and similar
      return 120; // Larger devices like iPhone Plus, Pro Max
    } else {
      if (height < 640) return 10; // Smaller Android devices
      if (height < 720) return 15; // Mid-sized Android devices
      return "100%"; // Larger Android devices
    }
  };
  const getDynamicWithCards = () => {
    if (Platform.OS === "ios") {
      if (width < 375) return 10; // iPhone SE and smaller
      if (width < 414) return 150; // iPhone 6/7/8/X and similar
      return 150; // Larger devices like iPhone Plus, Pro Max
    } else {
      if (width < 414) return 129;
      // if (width < 360) return 10;
      if (width < 375) return 10; // Smaller Android devices
      // if (width < 400) return 10; // Mid-sized Android devices
      return 10; // Larger Android devices    gap: Platform.select({
    }
  };

  // Dynamic height and width for Images
  const getDynamicHeightForImages = () => {
    if (Platform.OS === "ios") {
      if (height < 667) return 10; // iPhone SE and smaller
      if (height < 736) return 130; // iPhone 6/7/8/X and similar
      return "100%"; // Larger devices like iPhone Plus, Pro Max
    } else {
      if (height < 640) return 10; // Smaller Android devices
      if (height < 720) return 15; // Mid-sized Android devices
      return "100%"; // Larger Android devices
    }
  };
  const getDynamicWithImages = () => {
    if (Platform.OS === "ios") {
      if (width < 375) return 10; // iPhone SE and smaller
      if (width < 414) return 120; // iPhone 6/7/8/X and similar
      return "100%"; // Larger devices like iPhone Plus, Pro Max
    } else {
      if (width < 360) return 10; // Smaller Android devices
      // if (width < 375) return 1;
      if (width < 400) return 10; // Mid-sized Android devices
      return "100%"; // Larger Android devices    gap: Platform.select({
    }
  };

  // Screen size for Ipads

  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        backgroundColor: "#FEFEFE",
        // backgroundColor: "#B5BEB5",
        // overflow: "hidden",
        height: Platform.select({
          ios: getDynamicHeight(),
          android: getDynamicHeight(),
        }),
        // height: 300,
        width: Platform.select({
          ios: getDynamicWith(),
          android: getDynamicWith(),
        }),
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 10,
        // borderRadius: 10,
      }}
    >
      {/* () => alert("Ready to Navigate") */}

      <TouchableOpacity onPress={handleItems}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: 5,
          }}
        >
          <View
            style={{
              flex: 0.65,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <View
              style={{
                width: Platform.select({
                  ios: getDynamicWithCards(),
                  android: getDynamicWithCards(),
                }),
                backgroundColor: "white",
                height: Platform.select({
                  ios: getDynamicHeightForCards(),
                  android: getDynamicHeightForCards(),
                }),
                display: "flex",
                justifyContent: "center",
                // alignItems: "center", getDynamicHeightForImages getDynamicWithImages
                overflow: "hidden",
                borderRadius: 10,
              }}
            >
              <ImageBackground
                resizeMode="contain"
                source={{ uri: image }}
                style={{
                  width: Platform.select({
                    ios: getDynamicWithImages(),
                    android: "100%",
                  }),
                  height: Platform.select({
                    ios: getDynamicHeightForImages(),
                    android: getDynamicHeightForImages(),
                  }),
                  display: "flex",
                  alignSelf: "center",
                  justifyContent: "center",
                }}
              />
            </View>
          </View>
          <View
            style={{
              flex: 0.35,
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              marginTop: 10,
              padding: 10,
            }}
          >
            <View style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Text
                numberOfLines={2}
                style={{ fontSize: 14, fontWeight: "bold" }}
              >
                {phoneName}
              </Text>
              <Text style={{ fontSize: 13, fontWeight: "bold", color: "red" }}>
                {amount}
              </Text>
              <Text style={{ fontSize: 13, fontWeight: "700", color: "green" }}>
                {phoneBrand}
              </Text>
              {/* <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <ImageBackground
                  resizeMode="contain"
                  source={imageitem1}
                  style={{ width: 50, height: 30 }}
                />
              </View> */}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
}
