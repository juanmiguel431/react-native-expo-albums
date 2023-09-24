import React from 'react';
import { View } from 'react-native';
import { Album } from '../models/album';
import Card from './Card';

type AlbumDetailProps = {
  album: Album;
}

export const AlbumDetail: React.FC<AlbumDetailProps> = ({ album }) => {
  return (
    <View>
      <Card
        title={album.id.toString()}
        description={album.title}
        thumbnailUri={album.thumbnailUrl}
        imageUri={album.url}
      />
    </View>
  );
};

export default AlbumDetail;
