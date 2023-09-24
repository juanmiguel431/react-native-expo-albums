import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Header = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={StyleSheet.flatten([styles.container, {marginTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right, }])}
    >
      <Text style={styles.text}>Albums!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#c5c2c2',
    borderWidth: 3,
    elevation: 25,
    height: 120,
    justifyContent: 'center',
    // paddingTop: 15,
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
