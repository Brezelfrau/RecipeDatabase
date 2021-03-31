import * as React from "react";
import { StyleSheet, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native";

const AddRecipeScreen = ({ navigation }) => {
  const [title, onChangeTitle] = React.useState();
  const [duration, onChangeDuration] = React.useState();
  const [ingredients, onChangeIngredients] = React.useState();
  const [steps, onChangeSteps] = React.useState();
  const [textInputArray, setTextInputArray] = React.useState([]);

  const addTextInput = () => {
    //let textInput = textInputArray;
    textInputArray.push(
      <TextInput
        key={textInputArray.length}
        style={styles.input}
        onChangeText={onChangeIngredients}
        value={ingredients}
        placeholder="Zutaten"
      />
    );
    console.log("button pressed");
    setTextInputArray(textInputArray.slice());
  };
  console.log("draw");

  return (
    <ScrollView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTitle}
        value={title}
        placeholder="Titel"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeDuration}
        value={duration}
        placeholder="Dauer"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeIngredients}
        value={ingredients}
        placeholder="Zutaten"
      />
      {/*textInputArray.map((entry) => ({entry}))*/}
      {textInputArray}
      <Button
        title="Zutat hinzufügen"
        color="#0aada4"
        onPress={addTextInput}
      ></Button>
      <TextInput
        style={styles.input}
        onChangeText={onChangeSteps}
        value={steps}
        placeholder="Schritte"
      />
      <Button title="Schritt hinzufügen" color="#0aada4"></Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default AddRecipeScreen;
