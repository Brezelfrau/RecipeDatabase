import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const data = [
  {
    recipeName: "Belugalinsen Curry",
    thumbnail: "https://picsum.photos/id/292/200/300",
    duration: 10,
  },
  {
    recipeName: "Zucchini-Röllchen mit Cashew-Ricotta",
    thumbnail: "https://picsum.photos/id/225/200/300",
    duration: 20,
  },
  {
    recipeName: "Die echte Sauce Bolognese",
    thumbnail: "https://picsum.photos/id/102/200/300",
    duration: 100,
  },
];

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
