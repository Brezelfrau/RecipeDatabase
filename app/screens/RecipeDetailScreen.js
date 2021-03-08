import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Avatar,
  Button,
  Text,
  Card,
  Title,
  Paragraph,
} from "react-native-paper";
import { StyleSheet, View } from "react-native";

const Stack = createStackNavigator();

const RecipeDetailScreen = ({ navigation, route }) => (
  <Card>
    <Card.Title title={route.params.recipeName} />
    <Card.Cover source={{ uri: route.params.thumbnail }} />
    <Card.Content>
      <Paragraph>Zeit: {route.params.duration} min</Paragraph>

      <Title>Zutaten</Title>
      <View style={styles.container}>
        {route.params.ingredients.map((ingredient) => (
          <Text style={styles.element}>
            {"\u2219"}
            {ingredient}
            {"\n"}
          </Text>
        ))}
      </View>
      <Title>Zubereitung</Title>
      <View>
        {route.params.steps.map((step) => (
          <Text>{step}</Text>
        ))}
      </View>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  element: {
    marginTop: -10,
    paddingTop: 10,
  },
  container: {
    marginTop: 20,
  },
});

export default RecipeDetailScreen;
