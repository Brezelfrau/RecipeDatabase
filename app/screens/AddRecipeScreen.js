import * as React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import t from "tcomb-form-native";

const Form = t.form.Form;

const RecipeForm = t.struct({
  title: t.String,
  duration: t.Number,
});

const AddRecipeScreen = ({ navigation }) => (
  <ScrollView>
    <Text>hello</Text>
    <Form type={RecipeForm} />
  </ScrollView>
);

export default AddRecipeScreen;
