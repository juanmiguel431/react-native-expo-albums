import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Albums!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    // borderWidth: 3,
    elevation: 25,
    height: 120,
    justifyContent: 'center',
    paddingTop: 15,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        paddingTop: 15
      },
      android: {
        elevation: 10
      }
    })

  },
  text: {
    fontSize: 20
  }
});

export default Header;
