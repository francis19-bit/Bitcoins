import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ImageBackground,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import imageitem from "../../../assets/favicon.png";
import { useForm, Controller } from "react-hook-form";
import ActionButton from "../../component/Buttons/ActionButton";
import CustomTextInput from "../../component/TextField/CustomTextInput";

const Login = () => {
  // const navigation = useNavigation();
  //   const handleLogin = () => {
  //     // Navigate to HomePage on successful login
  //     navigation.navigate("HomePage");
  //   };

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const theme = useTheme();
  const navigation = useNavigation();

  const handleSignIn = async (formData) => {
    const { signInEmail, signInPassword } = formData;

    try {
      // Simulate local login validation
      if (signInEmail === "test@example.com" && signInPassword === "password") {
        Alert.alert("Success", "You have successfully logged in!");
        navigation.navigate("Home"); // Navigate to home or another screen
      } else {
        Alert.alert("Error", "Invalid email or password.");
      }
    } catch (error) {
      Alert.alert("Error", "An unexpected error occurred.");
    }
  };

  const imageUrl = { uri: "https://robohash.org/c45.png" };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E1E1E1" }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            {/* Logo Area */}
            <View
              style={{
                flex: 0.2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageBackground
                resizeMode="contain"
                source={imageUrl}
                style={{ width: "100%", height: 180 }}
              />
            </View>

            <View
              style={{
                flex: 0.8,
                borderRadius: 10,
                backgroundColor: "#E1E1E1",
              }}
            >
              <ScrollView>
                {/* Welcome Details */}
                <View style={{ flex: 1 }}>
                  <View
                    style={{ padding: 15, flexDirection: "column", gap: 50 }}
                  >
                    <View style={{ flexDirection: "column", gap: 5 }}>
                      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Welcome Back!
                      </Text>
                      <Text style={{ fontWeight: "500", fontSize: 18 }}>
                        Continue to sign in
                      </Text>
                    </View>

                    {/* Email & Password */}
                    <View
                      style={{
                        alignSelf: "center",
                        flexDirection: "column",
                        gap: 15,
                      }}
                    >
                      <Controller
                        control={control}
                        name="signInEmail"
                        rules={{
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        }}
                        defaultValue=""
                        render={({ field: { onChange, value } }) => (
                          <View>
                            <CustomTextInput
                              label={"Email"}
                              value={value}
                              textInputOnchange={onChange}
                            />
                            {errors.signInEmail && (
                              <Text style={{ color: "red" }}>
                                {errors.signInEmail.message}
                              </Text>
                            )}
                          </View>
                        )}
                      />

                      <Controller
                        control={control}
                        name="signInPassword"
                        rules={{ required: "Password is required" }}
                        defaultValue=""
                        render={({ field: { onChange, value } }) => (
                          <View>
                            <CustomTextInput
                              label={"Password"}
                              value={value}
                              textInputOnchange={onChange}
                              secureTextEntry
                            />
                            {errors.signInPassword && (
                              <Text style={{ color: "red" }}>
                                {errors.signInPassword.message}
                              </Text>
                            )}
                          </View>
                        )}
                      />
                    </View>

                    {/* Button */}
                    <View
                      style={{
                        alignItems: "center",
                        paddingTop: 30,
                      }}
                    >
                      <ActionButton
                        label={isSubmitting ? "Logging in..." : "Login"}
                        buttonStyle={{
                          width: 300,
                          borderRadius: 10,
                          paddingVertical: 5,
                        }}
                        labelStyle={{
                          fontSize: 20,
                        }}
                        handleActionButton={() =>
                          navigation.navigate("HomePage")
                        }
                        // onPress={}
                      />
                    </View>

                    {/* Don't Have Account */}
                    <View
                      style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <Text style={{ color: "black", fontSize: 18 }}>
                        Don't have an account?
                      </Text>
                      <Text
                        style={{
                          color: "green",
                          fontSize: 18,
                          fontWeight: "700",
                        }}
                        onPress={() => navigation.navigate("SignUp")}
                      >
                        Signup
                      </Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Login;
