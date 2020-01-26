import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ActivityBar from '../components/ActivityBar'

import { Plans } from '../__mocks__/PlanMocks'
import { LastActivities } from '../__mocks__/ActivityMocks'

function ActivtyList({ activities, count }) {
  if (!activities) {
    return <Text>No activities found:(</Text>
  }

  return (
    <View>
      {activities.map((activity, idx) => <ActivityBar key={`${activity.id}${idx}`} activity={activity}/>)}
    </View>
  )
}

export default function RecentActivitiesScreen({ navigation }) {
  onActionButtonPress = () => {
    navigation.navigate('AddPlan')
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>
  
        <View style={styles.activityListContainer}>
          <ActivtyList activities={Plans.plans} count={Plans.count}/>
        </View>
      </ScrollView>
    </View>
  );
}

RecentActivitiesScreen.navigationOptions = {
  title: 'Recent Activities',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  activityListContainer: {
    flex: 1,
    padding: 15,
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  }
});
