
import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import { Content, Card, CardItem, Text } from 'native-base';

const getRandomNumber = () => Math.floor(Math.random() * 100)

function ActivityBar({ activity, handlePlanClick = () => { console.log('Default click') } }) {
  return (
    <Content style={styles.contentWrap}>
      <Card>
        <CardItem header>
          <Text>Training {getRandomNumber()}</Text>
          <Text note style={styles.right}>Plan {getRandomNumber()}</Text>
        </CardItem>
        <CardItem style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Bench Press: </Text>
            <Text>55x10 | 60x10 | 65x10 | 70x10</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Back Squat: </Text> 
            <Text>55x10 | 60x10 | 65x10 | 70x10</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Front Squat: </Text>
            <Text>55x10 | 60x10 | 65x10 | 70x10</Text>
          </View>
        </CardItem>
        <CardItem header>
          <Text>Duration: 1h 50min </Text>
          <Text style={styles.right}>Date 12.08.2019</Text>
        </CardItem>
      </Card>
    </Content>
  )
}

const styles = StyleSheet.create({
  contentWrap: {
    marginBottom: 10
  },
  contentContainer: {
    alignItems: 'center',
    flexWrap: 'wrap',
    width: 'auto',
    height: 'auto'
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    flex: 1
  },
  right: {
    position: 'absolute',
    right: 15
  }
})

export default ActivityBar