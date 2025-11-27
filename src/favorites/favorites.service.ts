import { Injectable } from '@nestjs/common';
import { Favorite } from './entities/favorite.entity';
import { FavoritesResponseDto } from './dto/favorites.dto';
import { TracksService } from '../tracks/tracks.service';
import { addElementToFavs, filterData } from '../utils/utils';
import { Artist } from '../artists/entities/artist.entity';
import { ArtistsService } from '../artists/artists.service';
import { Album } from '../albums/entities/album.entity';
import { AlbumsService } from '../albums/albums.service';
import { Track } from '../tracks/entities/track.entity';

@Injectable()
export class FavoritesService {
  private readonly favorites = new Map<string, Favorite>();
  private readonly GLOBAL_FAVORITES_ID = 'global-favs';

  constructor(
    private readonly tracksService: TracksService,
    private readonly artistsService: ArtistsService,
    private readonly albumsService: AlbumsService,
  ) {
    this.favorites.set(this.GLOBAL_FAVORITES_ID, new Favorite());
  }

  private mapToResponseDto(favorites: Favorite): FavoritesResponseDto {
    return {
      artists: favorites.artists,
      albums: favorites.albums,
      tracks: favorites.tracks,
    };
  }

  findAll() {
    const favorites = this.favorites.get(this.GLOBAL_FAVORITES_ID);

    const validArtists = favorites.artists.filter((artist) =>
      this.artistsService.getRawArtists().has(artist.id),
    );
    const validAlbums = favorites.albums.filter((album) =>
      this.albumsService.getRawAlbums().has(album.id),
    );
    const validTracks = favorites.tracks.filter((track) =>
      this.tracksService.getRawTracks().has(track.id),
    );

    favorites.artists = validArtists;
    favorites.albums = validAlbums;
    favorites.tracks = validTracks;

    return this.mapToResponseDto(favorites);
  }

  addTrack(trackId: string) {
    const favorites = this.favorites.get(this.GLOBAL_FAVORITES_ID);
    if (!favorites) {
      throw new Error('Favorites not found');
    }

    return addElementToFavs<Track[], Track>({
      id: trackId,
      data: favorites.tracks,
      name: 'track',
      rawData: this.tracksService.getRawTracks(),
    });
  }

  addAlbum(albumId: string) {
    const favorites = this.favorites.get(this.GLOBAL_FAVORITES_ID);
    if (!favorites) {
      throw new Error('Favorites not found');
    }

    return addElementToFavs<Album[], Album>({
      id: albumId,
      data: favorites.albums,
      name: 'album',
      rawData: this.albumsService.getRawAlbums(),
    });
  }

  addArtist(artistId: string) {
    const favorites = this.favorites.get(this.GLOBAL_FAVORITES_ID);
    if (!favorites) {
      throw new Error('Favorites not found');
    }

    return addElementToFavs<Artist[], Artist>({
      id: artistId,
      data: favorites.artists,
      name: 'artist',
      rawData: this.artistsService.getRawArtists(),
    });
  }

  removeTrack(trackId: string) {
    const favorites = this.favorites.get(this.GLOBAL_FAVORITES_ID);
    if (!favorites) {
      throw new Error('Favorites not found');
    }

    return filterData<Track>({
      id: trackId,
      data: favorites,
      name: 'track',
    });
  }

  removeAlbum(albumId: string) {
    const favorites = this.favorites.get(this.GLOBAL_FAVORITES_ID);
    if (!favorites) {
      throw new Error('Favorites not found');
    }

    return filterData<Album>({
      id: albumId,
      data: favorites,
      name: 'album',
    });
  }

  removeArtist(artistId: string) {
    const favorites = this.favorites.get(this.GLOBAL_FAVORITES_ID);
    if (!favorites) {
      throw new Error('Favorites not found');
    }

    return filterData<Artist>({
      id: artistId,
      data: favorites,
      name: 'artist',
    });
  }
}
