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
import { ScrollView } from "react-native-gesture-handler";

const Stack = createStackNavigator();

const RecipeDetailScreen = ({ navigation, route }) => (
  <ScrollView>
    <Card>
      <Card.Title title={route.params.recipeName} />
      <Card.Cover source={{ uri: route.params.thumbnail }} />
      <Card.Content>
        <Paragraph>Dauer: {route.params.duration} min</Paragraph>

        <Title>Zutaten</Title>
        <View style={styles.container}>
          {
            //index is needed for avoiding 'key list' error message
          }
          {route.params.ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.element}>
              {"\u2219"}
              {ingredient}
              {"\n"}
            </Text>
          ))}
        </View>
        <Title>Zubereitung</Title>
        <View style={styles.container}>
          {route.params.steps.map((step, index) => (
            <Text key={index} style={styles.stepsStyles}>
              {step}
            </Text>
          ))}
        </View>
      </Card.Content>
    </Card>
  </ScrollView>
);

const styles = StyleSheet.create({
  element: {
    marginTop: -10,
    paddingTop: 10,
  },
  container: {
    marginTop: 20,
  },
  stepsStyles: {
    lineHeight: 25,
  },
});

export default RecipeDetailScreen;
