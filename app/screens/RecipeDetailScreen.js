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

const Stack = createStackNavigator();

const RecipeDetailScreen = ({ navigation, route }) => (
  <Card>
    <Card.Title title={route.params.recipeName} />
    <Card.Cover source={{ uri: route.params.thumbnail }} />
    <Card.Content>
      <Paragraph>Zeit: {route.params.duration} min</Paragraph>
      <Title>Ingredients</Title>
      <Paragraph>
        {route.params.ingredients.map((ingredient) => (
          <Text style={{ flex: 1, paddingLeft: 5 }}>
            {"\u2219"}
            {ingredient}
            {"\n"}
          </Text>
        ))}
      </Paragraph>
      <Title>Steps</Title>
    </Card.Content>
  </Card>
);

export default RecipeDetailScreen;
