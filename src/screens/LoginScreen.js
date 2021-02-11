import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.login}>
      <Text>LoginScreen</Text>
    </View>
  )
}

export default LoginScreen;


const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});