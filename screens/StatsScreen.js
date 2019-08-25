import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default function StatsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <ExpoConfigView />;
}

StatsScreen.navigationOptions = {
  title: 'app.json',
};
