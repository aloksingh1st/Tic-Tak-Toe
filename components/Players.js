import { StyleSheet, TextInput, Button, Text, View } from "react-native";
import React, { useState } from "react";

export default function Players() {
  const [text, setText] = useState("");
  const [player2, setPlayer2] = useState("");

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleSubmit = () => {
    // Handle the text input data, e.g., submit it to an API or store it in state
    console.log("Submitted text: ", text, player2);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleTextChange}
        value={text}
        placeholder="Enter text here"
      />
      <TextInput
        style={styles.input}
        onChangeText={(ans) => setPlayer2(ans)}
        value={player2}
        placeholder="Enter text here"
      />
      <Button title="Submit" style={styles.button} onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200,
  },

  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  button: {},
});
