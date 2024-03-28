import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SignUpScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Sign Up Screen</Text>
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

export default SignUpScreen;
