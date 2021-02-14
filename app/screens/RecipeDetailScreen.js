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

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const Stack = createStackNavigator();

const RecipeDetailScreen = ({ navigation, route }) => (
  <Card>
    <Card.Title left={LeftContent} />
    <Card.Content>
      <Title>{route.params.recipeName}</Title>
    </Card.Content>
    <Card.Cover source={{ uri: "https://picsum.photos/700" }} />

    <Text>
      {route.params.recipeName} in {route.params.duration} min
    </Text>
  </Card>
);

export default RecipeDetailScreen;
