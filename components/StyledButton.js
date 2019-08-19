import React from 'react';
import { TouchableHighlight, Button } from 'react-native';

export function PrimaryButton({ styles, onPressButton = () => { console.log('Pressed Button') }, ...props }) {
  return (
  <TouchableHighlight
    style={{
      height: 40,
      width: 160,
      borderRadius: 10,
      backgroundColor: "yellow",
      marginLeft: 50,
      marginRight: 50,
      marginTop: 20,
      ...styles
    }}>
      <Button
        {...props}
        onPress={onPressButton}            
        title="SAVE"
        accessibilityLabel="Learn more about this button"
      />
    </TouchableHighlight>
  )
}
