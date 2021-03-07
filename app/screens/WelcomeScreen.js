import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const WelcomeScreen = ({ navigation }) => (
  <ScrollView>
    <Card>
      <Card.Title title="Belugalinsen Curry" />
      <Card.Cover source={{ uri: "https://picsum.photos/id/292/200/300" }} />
      <Card.Actions>
        <Button
          onPress={() =>
            navigation.navigate("RecipeDetailScreen", {
              recipeName: "Belugalinsen Curry",
              thumbnail: "https://picsum.photos/id/292/200/300",
              duration: 10,
            })
          }
        >
          Open
        </Button>
      </Card.Actions>
      <Card.Title title="Zucchini-Röllchen mit Cashew-Ricotta" />
      <Card.Cover source={{ uri: "https://picsum.photos/id/225/200/300" }} />
      <Card.Actions>
        <Button
          onPress={() =>
            navigation.navigate("RecipeDetailScreen", {
              recipeName: "Zucchini-Röllchen mit Cashew-Ricotta",
              thumbnail: "https://picsum.photos/id/225/200/300",
              duration: 20,
            })
          }
        >
          Open
        </Button>
      </Card.Actions>
      <Card.Title title="Die echte Sauce Bolognese" />
      <Card.Cover source={{ uri: "https://picsum.photos/id/102/200/300" }} />
      <Card.Actions>
        <Button
          onPress={() =>
            navigation.navigate("RecipeDetailScreen", {
              recipeName: "Die echte Sauce Bolognese",
              thumbnail: "https://picsum.photos/id/102/200/300",
              duration: 100,
            })
          }
        >
          Open
        </Button>
      </Card.Actions>
    </Card>
  </ScrollView>
);

export default WelcomeScreen;
