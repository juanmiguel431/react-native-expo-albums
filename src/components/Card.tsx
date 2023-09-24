import React, { useMemo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type CardProps = {
  title: string;
  description: string;
  thumbnailUri: string;
  imageUri: string;
}

export const Card: React.FC<CardProps> = ({ title, description, thumbnailUri, imageUri  }) => {

  const source = useMemo(() => {
    return { uri: thumbnailUri }
  }, [thumbnailUri]);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.thumbnailContainer}>
          <Image source={source} style={styles.thumbnail}/>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
          <Text>{description}</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUri }} style={styles.image}/>
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
  header: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: 18,
  },
  image: {
    flex: 1,
    height: 300,
  },
  imageContainer: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
  },
  section: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    position: 'relative',
  },
  thumbnail: {
    height: 80,
    width: 80
  },
  thumbnailContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  }
});

export default Card;
