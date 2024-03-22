import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SignInScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Sign In Screen</Text>
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

export default SignInScreen;
