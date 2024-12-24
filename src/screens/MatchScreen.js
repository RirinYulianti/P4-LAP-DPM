import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity } from "react-native";

const MatchScreen = () => {
  // State untuk skor dan pemenang
  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);
  const [winner, setWinner] = useState(null);

  // Nama tim
  const TEAM_A_NAME = "Putra";
  const TEAM_B_NAME = "Dimas";

  const handleIncrement = (team) => {
    if (team === "A") {
      const newScore = scoreTeamA + 1;
      setScoreTeamA(newScore);

      if (newScore === 10) {
        setWinner(TEAM_A_NAME);
        Alert.alert("Pemenang", `${TEAM_A_NAME} Menang!`);
      }
    } else if (team === "B") {
      const newScore = scoreTeamB + 1;
      setScoreTeamB(newScore);

      if (newScore === 10) {
        setWinner(TEAM_B_NAME);
        Alert.alert("Pemenang", `${TEAM_B_NAME} Menang!`);
      }
    }
  };

  const handleDecrement = (team) => {
    if (team === "A") {
      setScoreTeamA(Math.max(0, scoreTeamA - 1));
    } else if (team === "B") {
      setScoreTeamB(Math.max(0, scoreTeamB - 1));
    }
  };

  const handleReset = () => {
    setScoreTeamA(0);
    setScoreTeamB(0);
    setWinner(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pertandingan Futsal</Text>

      {/* Tampilkan Pemenang Jika Ada */}
      {winner && (
        <View style={styles.winnerContainer}>
          <Text style={styles.winnerText}>{`${winner} Menang!`}</Text>
        </View>
      )}

      {/* Scoreboard dengan Gambar Tim */}
      <View style={styles.scoreboard}>
        {/* Tim A */}
        <TeamComponent
          teamLabel="Team A"
          teamName={TEAM_A_NAME}
          teamScore={scoreTeamA}
          teamImage={require("../../assets/teamA.png")} // Gambar untuk Tim A
          onIncrement={() => handleIncrement("A")}
          onDecrement={() => handleDecrement("A")}
        />

        {/* Tim B */}
        <TeamComponent
          teamLabel="Team B"
          teamName={TEAM_B_NAME}
          teamScore={scoreTeamB}
          teamImage={require("../../assets/teamB.png")} // Gambar untuk Tim B
          onIncrement={() => handleIncrement("B")}
          onDecrement={() => handleDecrement("B")}
        />
      </View>

      {/* Tombol Reset */}
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetButtonText}>Reset Skor</Text>
      </TouchableOpacity>
    </View>
  );
};

// Komponen Tim
const TeamComponent = ({ teamLabel, teamName, teamScore, teamImage, onIncrement, onDecrement }) => {
  return (
    <View style={styles.teamContainer}>
      <Text style={styles.teamLabel}>{teamLabel}</Text>
      <Image source={teamImage} style={styles.teamImage} />
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{teamScore}</Text>
      <View style={styles.scoreControl}>
        <TouchableOpacity style={styles.button} onPress={onIncrement}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onDecrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "800",
    color: "#333",
    marginBottom: 30,
  },
  winnerContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#4CAF50",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  winnerText: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  scoreboard: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 40,
  },
  teamContainer: {
    alignItems: "center",
    flex: 1,
    marginHorizontal: 18,
    padding: 25,
    backgroundColor: "#fff",
    borderRadius: 18,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  teamLabel: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  teamImage: {
    borderRadius: 25,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#e0e0e0",
    width: 120,
    height: 120,
  },
  teamName: {
    fontSize: 26,
    fontWeight: "600",
    color: "#555",
    marginBottom: 12,
  },
  score: {
    fontSize: 65,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  scoreControl: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  resetButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: "#FF6F61",
    borderRadius: 25,
    elevation: 4,
  },
  resetButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default MatchScreen;
