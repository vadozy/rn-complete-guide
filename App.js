import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const startingGoals = [
  { key: Math.random().toString(), value: 'Goal 01 x' },
  { key: Math.random().toString(), value: 'Goal 02 x' },
  { key: Math.random().toString(), value: 'Goal 03 x' },
  // { key: Math.random().toString(), value: 'Goal 04 x' },
  // { key: Math.random().toString(), value: 'Goal 05 x' },
  // { key: Math.random().toString(), value: 'Goal 06 x' },
  // { key: Math.random().toString(), value: 'Goal 07 x' },
  // { key: Math.random().toString(), value: 'Goal 08 x' },
  // { key: Math.random().toString(), value: 'Goal 09 x' },
  // { key: Math.random().toString(), value: 'Goal 10 x' },
  // { key: Math.random().toString(), value: 'Goal 11 x' },
  // { key: Math.random().toString(), value: 'Goal 12 x' },
  // { key: Math.random().toString(), value: 'Goal 13 x' },
  // { key: Math.random().toString(), value: 'Goal 14 x' },
  // { key: Math.random().toString(), value: 'Goal 15 x' },
  // { key: Math.random().toString(), value: 'Goal 16 x' },
  // { key: Math.random().toString(), value: 'Goal 17 x' },
];

export default function App() {
  const [goals, setGoals] = useState(startingGoals);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = useCallback((goalTitle) => {
    console.log(`Adding goal: ${goalTitle}`);
    setGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle },
    ]);
    hideAddGoalModal();
  }, []);

  //console.log(goals);

  const deleteGoal = (key) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((g) => g.key !== key);
    });
  };

  const showAddGoalModal = useCallback(() => setIsAddMode(true), []);
  const hideAddGoalModal = useCallback(() => setIsAddMode(false), []);

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={showAddGoalModal} />
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={isAddMode}
        close={hideAddGoalModal}
      />
      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            onDelete={deleteGoal}
            id={itemData.item.key}
          />
        )}
      ></FlatList>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
