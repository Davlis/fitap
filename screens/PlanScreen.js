import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ActionButton from 'react-native-action-button';

import { MonoText } from '../components/StyledText';
import PlanBar from '../components/PlanBar'

import { Plans } from '../__mocks__/PlanMocks'

function PlanList({ plans, count }) {
  if (!plans) {
    return <Text>No plans found :(</Text>
  }

  return (
    <View>
      {plans.map((plan, idx) => <PlanBar key={`${plan.id}${idx}`} plan={plan}/>)}
    </View>
  )
}

export default function PlanScreen({ navigation }) {
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
  
        <View style={styles.planListContainer}>
          <MonoText style={[styles.getStartedText, styles.codeHighlightContainer]}>My plans</MonoText>
          <PlanList plans={Plans.plans} count={Plans.count}/>
        </View>

      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <ActionButton buttonColor="rgba(231,76,60,1)" onPress={onActionButtonPress} />
      </View>
    </View>
  );
}

PlanScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  planListContainer: {
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
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1337,
    alignItems: 'center',
    paddingVertical: 50,
  }
});
