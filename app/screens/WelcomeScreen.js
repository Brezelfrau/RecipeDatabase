import * as React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { data } from "../RecipeData";
import { FAB } from "react-native-paper";

const WelcomeScreen = ({ navigation }) => (
  <View>
    <ScrollView>
      {data.map((recipe, index) => (
        <Card key={index}>
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
    <FAB
      style={styles.fab}
      icon="plus"
      onPress={() => navigation.navigate("AddRecipeScreen")}
    />
  </View>
);

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default WelcomeScreen;
