import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { jsonPlaceHolder } from '../api';
import { Album } from '../models/album';
import AlbumDetail from './AlbumDetail';

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
      <ScrollView>
        {this.state.albums.map((i) => (
          <AlbumDetail key={i.id} album={i}/>
        ))}
      </ScrollView>
    );
  }
}

export default AlbumList;
