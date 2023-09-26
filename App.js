import { Text, View } from 'react-native';
import styles from './styles/styles';
import React, { useState } from 'react';
import { Pressable } from 'react-native';

export default function App() {

  const values = ["Option1", "Option2", "Option3", "Option4"];
  const [value, setValue] = useState(values[0]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select one option:</Text>
      <ButtonSelector values={values} selectedValue={value} selectionChanged={setValue} />
      <Text style={styles.result}>You selected: {value}</Text>
    </View>
  );
}

/* New style whit function (2023) */
function ButtonSelector({ values, selectedValue, selectionChanged }) {

    return (
        <View style={styles.buttonrow}>
            {values.map((value) => (
                <Pressable key={value} onPress={() => selectionChanged(value)}>
                    <Text
                    style={[styles.button, value==selectedValue && styles.selectedButton]}>{value}</Text>
                </Pressable>
            ))}
        </View>
    );
}

/* This is old style */
/* const ButtonSelector = ({values, selectedValue,selectionChanged}) =>
    return(
        <View style={styles.buttonrow}>
            {values.map((value) => (
                <Pressable key={value} onPress={() => selectionChanged(value)}>
                    <Text
                    style={[styles.button, value==selectedValue && styles.selectedButton]}>{value}</Text>
                </Pressable>
            ))}
        </View>
      )
   */