import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { Album } from './entities/album.entity';
import { AlbumResponseDto } from './dto/albums.dto';
import { checkExistenceOrThrow } from '../utils/utils';

@Injectable()
export class AlbumsService {
  private readonly albums = new Map<string, Album>();

  private mapToResponseDto(album: Album): AlbumResponseDto {
    return {
      id: album.id,
      name: album.name,
      year: album.year,
      artistId: album.artistId ?? null,
    };
  }

  create(createAlbumDto: CreateAlbumDto) {
    const newAlbum = new Album({
      name: createAlbumDto.name,
      artistId: createAlbumDto.artistId,
      year: createAlbumDto.year,
    });
    this.albums.set(newAlbum.id, newAlbum);
    return this.mapToResponseDto(newAlbum);
  }

  findAll() {
    return Array.from(this.albums.values()).map(this.mapToResponseDto);
  }

  findOne(id: string) {
    const album = checkExistenceOrThrow({
      id,
      map: this.albums,
      name: 'Album',
    });

    return this.mapToResponseDto(album);
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto) {
    const album = checkExistenceOrThrow({
      id,
      map: this.albums,
      name: 'Track',
    });

    album.name = updateAlbumDto.name;
    album.artistId = updateAlbumDto.artistId;
    album.year = updateAlbumDto.year;

    this.albums.set(id, album);
    return this.mapToResponseDto(album);
  }

  remove(id: string) {
    checkExistenceOrThrow({
      id,
      map: this.albums,
      name: 'Album',
    });
    this.albums.delete(id);
  }
}
