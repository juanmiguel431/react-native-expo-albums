import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type CardProps = {
  title: string;
}

export const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    borderLeftWidth: 1,
    borderRadius: 2,
    borderRightWidth: 1,
    borderTopWidth: 1,
    elevation: 2,
    marginHorizontal: 5,
    marginTop: 10,
    shadowColor: '#dc0808',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  },
  section: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    position: 'relative'
  }
});

export default Card;
