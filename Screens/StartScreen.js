import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function StartScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Start Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StartScreen;
