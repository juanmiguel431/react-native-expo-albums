import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { jsonPlaceHolder } from '../api';
import { Album } from '../models/album';

type AlbumListProps = {};

type AlbumListState = {
  albums: Array<Album>;
}

export class AlbumList extends Component<AlbumListProps, AlbumListState> {

  constructor(props: AlbumListProps) {
    super(props);
    this.state = {
      albums: []
    }
  }

  componentDidMount() {
    jsonPlaceHolder.get<Album[]>('/albums/1/photos').then((response) => {
      this.setState({ albums: response.data });
    });
  }

  render() {
    return (
      <View>
        {this.state.albums.map((i) => {
          return <Text key={i.id}>{i.title}</Text>;
        })}
      </View>
    );
  }
}

export default AlbumList;
