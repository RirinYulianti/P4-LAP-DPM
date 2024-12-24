import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const ResetButton = ({ onReset }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onReset}>
      <Text style={styles.buttonText}>Reset Skor</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#dc3545",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ResetButton;
