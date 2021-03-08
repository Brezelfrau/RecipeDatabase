import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { data } from "../RecipeData";

const WelcomeScreen = ({ navigation }) => (
  <ScrollView>
    {data.map((recipe) => (
      <Card>
        <Card.Title title={recipe.recipeName} />
        <Card.Cover source={{ uri: recipe.thumbnail }} />
        <Card.Actions>
          <Button
            onPress={() => navigation.navigate("RecipeDetailScreen", recipe)}
          >
            Open
          </Button>
        </Card.Actions>
      </Card>
    ))}
  </ScrollView>
);

export default WelcomeScreen;
