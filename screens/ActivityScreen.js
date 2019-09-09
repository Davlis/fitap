import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

export default function ActivityScreen({ navigation }) {
  onActivityStartClick = () => {
    navigation.navigate('StartActivity')
  }

  onRecentActivitiesClick = () => {
    navigation.navigate('RecentActivities')
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.wrapper}>
          <View style={styles.actionBtnContainer}>
            <Button
              title="Start Activity"
              onPress={onActivityStartClick}
            />
          </View>
          <View style={styles.actionBtnContainer}>
            <Button
              title="Recent Activities"
              onPress={onRecentActivitiesClick}
            />
          </View>          
        </View>
      </ScrollView>
    </View>
  );
}

ActivityScreen.navigationOptions = {
  title: 'Activities',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    width: '100%',
    height: '100%',
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  actionBtnContainer: {
    flex: 1,
    marginRight: 5,
    marginLeft: 5
  }
});
