import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DashboardScreen = () => {
  return (
    <View style={styles.dashboard}>
      <Text>DashboardScreen</Text>
    </View>
  )
}

export default DashboardScreen;


const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});