import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import MatchScreen from "./src/screens/MatchScreen";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MatchScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
