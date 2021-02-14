import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  SafeAreaView,
  Button,
} from "react-native";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MyNavigator from "./app/AppNavigator";

import WelcomeScreen from "./app/screens/WelcomeScreen";

const App = () => {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
};

// export default function Main() {
//   return (
//     <PaperProvider>
//       <SafeAreaView>
//         <WelcomeScreen />
//       </SafeAreaView>
//     </PaperProvider>
//   );
// }

export default function Main() {
  return <MyNavigator />;
}

AppRegistry.registerComponent(appName, () => Main);
