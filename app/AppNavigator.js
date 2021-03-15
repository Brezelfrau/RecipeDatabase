import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import RecipeDetailScreen from "./screens/RecipeDetailScreen";
import { Button, Text } from "react-native";
import AddRecipeScreen from "./screens/AddRecipeScreen";

const Stack = createStackNavigator();

const MyNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="RecipeDetailScreen"
          component={RecipeDetailScreen}
          options={{ title: "Details" }}
        />
        <Stack.Screen
          name="AddRecipeScreen"
          component={AddRecipeScreen}
          options={{ title: "Neues Rezept" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyNavigator;
