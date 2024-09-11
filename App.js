import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';



export default function App() {

  const [diceRoll, setDiceRoll] = useState(1);

  const rollDice = () => {
    const randomRoll = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(randomRoll);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dice Roller</Text>
      <Text style={styles.dice}>{diceRoll}</Text>
      <Button title="Roll the Dice" onPress={rollDice} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});