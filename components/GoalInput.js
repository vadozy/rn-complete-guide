import React, { useState, useCallback } from 'react';

import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = useCallback((text) => setEnteredGoal(text), []);

  const addGoalHandler = useCallback(() => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }, [props.onAddGoal, enteredGoal]);

  return (
    <Modal animationType="slide" transparent={false} visible={props.visible}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.close} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  input: {
    width: '80%',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    width: '40%',
  },
});

export default GoalInput;
