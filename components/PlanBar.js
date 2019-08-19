
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';

function PlanBar({ plan, handlePlanClick = () => { console.log('Default click') } }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePlanClick}>
        <View style={styles.topBar}>
            <Text style={styles.text}>Name: {plan.name}</Text>
            <Text style={styles.text}>Difficulty: {plan.difficulty}</Text>
          </View>
          <View style={styles.middle}>
            <Text style={styles.text}>Purpose: {plan.purpose}</Text>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.text}>Trainings: {plan.trainings.count}</Text>
          </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',

    paddingTop: 15,
    paddingBottom: 15,
  },
  text: {
    color: '#2e78b7'
  },
  topBar: {
    display: 'flex'
  }
})

export default PlanBar