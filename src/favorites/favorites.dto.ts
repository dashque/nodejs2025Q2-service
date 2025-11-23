// interface Favorites {
//   artists: string[]; // favorite artists ids
//   albums: string[]; // favorite albums ids
//   tracks: string[]; // favorite tracks ids
// }
import { ArtistResponseDto } from '../artists/artists.dto';
import { AlbumResponseDto } from '../albums/albums.dto';
import { TrackResponseDto } from '../tracks/track.dto';

export class FavoritesResponseDto {
  artists: ArtistResponseDto[];
  albums: AlbumResponseDto[];
  tracks: TrackResponseDto[];
}
