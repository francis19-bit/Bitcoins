import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ActivityIndicator,
  ImageBackground,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import imageitem from "../../../assets/favicon.png";
import { useForm, Controller } from "react-hook-form";
import CustomTextInput from "../../component/TextField/CustomTextInput";
import ActionButton from "../../component/Buttons/ActionButton";

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false); // State to manage loading state
  const theme = useTheme();
  const navigation = useNavigation();

  const handleEmailAuth = (formData) => {
    setIsLoading(true); // Start loading state

    try {
      const { name, phone, email, password } = formData;

      if (!name || !phone || !email || !password) {
        Alert.alert("Error", "All fields are required.");
        setIsLoading(false);
        return;
      }

      // Simulate successful registration and navigate to login
      setTimeout(() => {
        setIsLoading(false);
        Alert.alert("Success", "Account created successfully!");
        navigation.navigate("Login");
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      Alert.alert("Error", "Something went wrong.");
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
                    style={{ padding: 15, flexDirection: "column", gap: 40 }}
                  >
                    <View style={{ flexDirection: "column", gap: 5 }}>
                      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Create Account
                      </Text>
                      <Text style={{ fontWeight: "500", fontSize: 18 }}>
                        Please fill in the details below
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
                        name="name"
                        rules={{
                          required: "Name is required",
                          validate: {
                            noNumbers: (value) =>
                              !/\d/.test(value) ||
                              "Please enter words only, no numbers allowed.",
                            maxLength: (value) =>
                              value.trim().split(/\s+/).length <= 15 ||
                              "Please enter no more than 15 words.",
                          },
                        }}
                        defaultValue=""
                        render={({ field: { onChange, onBlur, value } }) => (
                          <View>
                            <CustomTextInput
                              label={"Name"}
                              value={value}
                              textInputOnchange={onChange}
                            />
                            {errors.name && (
                              <Text style={{ color: "red" }}>
                                {errors.name.message}
                              </Text>
                            )}
                          </View>
                        )}
                      />

                      <Controller
                        control={control}
                        name="phone"
                        rules={{
                          required: "Phone number is required",
                          pattern: {
                            value: /^\d{10}$/,
                            message: "Phone number must be exactly 10 digits",
                          },
                        }}
                        defaultValue=""
                        render={({ field: { onChange, value } }) => (
                          <View>
                            <CustomTextInput
                              label={"Phone"}
                              value={value}
                              textInputOnchange={onChange}
                            />
                            {errors.phone && (
                              <Text style={{ color: "red" }}>
                                {errors.phone.message}
                              </Text>
                            )}
                          </View>
                        )}
                      />

                      <Controller
                        control={control}
                        name="email"
                        rules={{
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Please enter a valid email address",
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
                            {errors.email && (
                              <Text style={{ color: "red" }}>
                                {errors.email.message}
                              </Text>
                            )}
                          </View>
                        )}
                      />

                      <Controller
                        control={control}
                        name="password"
                        rules={{
                          required: "Password is required",
                          minLength: {
                            value: 8,
                            message:
                              "Password should be at least 8 characters long",
                          },
                          validate: {
                            hasDigit: (value) =>
                              /\d/.test(value) ||
                              "Password should contain at least one digit",
                            hasLetter: (value) =>
                              /[a-zA-Z]/.test(value) ||
                              "Password should contain at least one letter",
                            hasSpecialChar: (value) =>
                              /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                              "Password should contain at least one special character",
                          },
                        }}
                        defaultValue=""
                        render={({ field: { onChange, value } }) => (
                          <View>
                            <CustomTextInput
                              label={"Password"}
                              value={value}
                              textInputOnchange={onChange}
                              secureTextEntry
                            />
                            {errors.password && (
                              <Text style={{ color: "red" }}>
                                {errors.password.message}
                              </Text>
                            )}
                          </View>
                        )}
                      />
                    </View>

                    {/* Button */}
                    <View style={{ alignItems: "center" }}>
                      {isLoading ? (
                        <ActivityIndicator />
                      ) : (
                        <ActionButton
                          label={"Create Account"}
                          buttonStyle={{
                            width: 300,
                            borderRadius: 10,
                            paddingVertical: 5,
                          }}
                          labelStyle={{
                            fontSize: 20,
                            fontFamily: "Lexend_200ExtraLight",
                          }}
                          handleActionButton={() =>
                            navigation.navigate("HomePage")
                          }
                        />
                      )}
                    </View>

                    {/* Already have an account */}
                    <View
                      style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <Text style={{ color: "black", fontSize: 18 }}>
                        Already have an account?
                      </Text>
                      <Text
                        style={{
                          color: "green",
                          fontSize: 18,
                          fontWeight: "700",
                        }}
                        onPress={() => navigation.navigate("Login")}
                      >
                        Login
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

export default SignUp;
