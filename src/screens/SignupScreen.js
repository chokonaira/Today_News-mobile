import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SignupScreen = () => {
  return (
    <View style={styles.signup}>
      <Text>SignupScreen</Text>
    </View>
  )
}

export default SignupScreen;


const styles = StyleSheet.create({
  signup: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});