import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const WelcomeScreen = ({ navigation }) => (
  <ScrollView>
    <Card>
      <Card.Title left={LeftContent} />
      <Card.Content>
        <Title>Belugalinsen Curry</Title>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <Button
          onPress={() =>
            navigation.navigate("RecipeDetailScreen", {
              recipeName: "Belugalinsen Curry",
              duration: 10,
            })
          }
        >
          Open
        </Button>
      </Card.Actions>
      <Card.Title left={LeftContent} />
      <Card.Content>
        <Title>Zucchini-Röllchen mit Cashew-Ricotta</Title>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <Button
          onPress={() =>
            navigation.navigate("RecipeDetailScreen", {
              recipeName: "Zucchini-Röllchen mit Cashew-Ricotta",
              duration: 20,
            })
          }
        >
          Open
        </Button>
      </Card.Actions>
      <Card.Title left={LeftContent} />
      <Card.Content>
        <Title>Die echte Sauce Bolognese</Title>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <Button>Open</Button>
      </Card.Actions>
    </Card>
  </ScrollView>
);

export default WelcomeScreen;
