// import { createStackNavigator } from "@react-navigation/stack";
// import { useTheme } from "react-native-paper";
// import { StackActions, useNavigation } from "@react-navigation/native";
// import { Ionicons } from "@expo/vector-icons";
// import { Pressable, View } from "react-native";
// import Login from "../../Screens/Authentication/Login";
// import SignUp from "../../Screens/Authentication/SignUp";

// const AuthStack = createStackNavigator();
// export default function AuthNavigator() {
//   const theme = useTheme();
//   const navigation = useNavigation();
//   return (
//     <AuthStack.Navigator>
//       {/* <AuthStack.Screen
//         name="Welcome"
//         component={Welcome}
//         options={{ headerShown: false }}
//       /> */}
//       <AuthStack.Group
//         screenOptions={{
//           tabBarActiveTintColor: theme.colors.primary,
//           headerStyle: { height: 100 },
//           headerTitleStyle: { color: theme.colors.primary },
//           headerStyle: {
//             backgroundColor: theme.colors.background,
//             borderBottomWidth: 0,
//           },
//           tabBarItemStyle: {
//             backgroundColor: theme.colors.background,
//             paddingBottom: 20,
//           },
//           tabBarStyle: { height: 100 },
//           tabBarIcon: ({ focused }) => (
//             <Ionicons
//               name={focused ? "settings" : "settings-outline"}
//               size={24}
//               color={focused ? theme.colors.primary : theme.colors.onBackground}
//             />
//           ),

//           headerShown: false,
//         }}
//       >
//         <AuthStack.Screen
//           name="SignUp"
//           component={SignUp}
//           options={{ headerBackTitle: "", headerTitle: "" }}
//         />
//         <AuthStack.Screen
//           name="Login"
//           component={Login}
//           options={{ headerBackTitle: "", headerTitle: "" }}
//         />
//       </AuthStack.Group>
//     </AuthStack.Navigator>
//   );
// }

// import { createStackNavigator } from "@react-navigation/stack";
// import { useTheme } from "react-native-paper";
// import { useNavigation } from "@react-navigation/native";
// import { useState, useEffect } from "react";
// import { View } from "react-native";
// import Login from "../../Screens/Authentication/Login";
// import SignUp from "../../Screens/Authentication/SignUp";
// import ScreenDemo from "../ScreenDemo/ScreenDemo";

// // Assuming ScreenDemo is your splash screen component
// // import ScreenDemo from "../../Screens/Authentication/ScreenDemo";

// const AuthStack = createStackNavigator();

// export default function AuthNavigator() {
//   const theme = useTheme();
//   const navigation = useNavigation();

//   // State to manage splash screen visibility
//   const [isSplashVisible, setIsSplashVisible] = useState(true);

//   // Effect to hide splash screen after 5 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsSplashVisible(false); // Hide splash after 5 seconds
//     }, 5000);

//     return () => clearTimeout(timer); // Clean up timer if component unmounts
//   }, []);

//   return (
//     <AuthStack.Navigator>
//       {/* Show ScreenDemo as the initial screen */}
//       {isSplashVisible ? (
//         <AuthStack.Screen
//           name="ScreenDemo"
//           component={ScreenDemo}
//           options={{ headerShown: false }}
//         />
//       ) : (
//         <>
//           {/* Once splash is done, show Login and SignUp */}
//           <AuthStack.Group
//             screenOptions={{
//               tabBarActiveTintColor: theme.colors.primary,
//               headerStyle: {
//                 backgroundColor: theme.colors.background,
//                 borderBottomWidth: 0,
//               },
//               headerTitleStyle: { color: theme.colors.primary },
//               tabBarItemStyle: {
//                 backgroundColor: theme.colors.background,
//                 paddingBottom: 20,
//               },
//               tabBarStyle: { height: 100 },
//               headerShown: false,
//             }}
//           >
//             <AuthStack.Screen
//               name="SignUp"
//               component={SignUp}
//               options={{ headerBackTitle: "", headerTitle: "" }}
//             />
//             <AuthStack.Screen
//               name="Login"
//               component={Login}
//               options={{ headerBackTitle: "", headerTitle: "" }}
//             />
//           </AuthStack.Group>
//         </>
//       )}
//     </AuthStack.Navigator>
//   );
// }

import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "react-native-paper";
import Login from "../../Screens/Authentication/Login";
import SignUp from "../../Screens/Authentication/SignUp";
import HomePage from "../../Screens/HomePage";

const AuthStack = createStackNavigator();

export default function AuthNavigator() {
  const theme = useTheme();

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}
