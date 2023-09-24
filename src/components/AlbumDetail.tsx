import React from 'react';
import { Text, View } from 'react-native';
import { Album } from '../models/album';

type AlbumDetailProps = {
  album: Album;
}

export const AlbumDetail: React.FC<AlbumDetailProps> = ({ album }) => {
  return (
    <View>
      <Text>{album.title}</Text>
    </View>
  );
};

export default AlbumDetail;
