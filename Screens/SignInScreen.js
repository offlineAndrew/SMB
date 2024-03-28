import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SMBLogo from '../Components/SMB_logo';

function SignInScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Sign In Screen</Text>
      <SMBLogo />
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
