import { ArtistResponseDto } from '../../artists/dto/artists.dto';
import { AlbumResponseDto } from '../../albums/dto/albums.dto';
import { TrackResponseDto } from '../../tracks/dto/track.dto';

export class Favorite {
  artists: ArtistResponseDto[];
  albums: AlbumResponseDto[];
  tracks: TrackResponseDto[];

  constructor() {
    this.artists = [];
    this.albums = [];
    this.tracks = [];
  }
}
