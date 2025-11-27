import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Artist } from './entities/artist.entity';
import { ArtistResponseDto } from './dto/artists.dto';
import { checkExistenceOrThrow } from '../utils/utils';

@Injectable()
export class ArtistsService {
  private readonly artists = new Map<string, Artist>();

  private mapToResponseDto(artist: Artist): ArtistResponseDto {
    return {
      id: artist.id,
      name: artist.name,
      grammy: artist.grammy,
    };
  }

  create(createArtistDto: CreateArtistDto) {
    const newArtist = new Artist(createArtistDto.name, createArtistDto.grammy);
    this.artists.set(newArtist.id, newArtist);
    return this.mapToResponseDto(newArtist);
  }

  findAll() {
    return Array.from(this.artists.values()).map(this.mapToResponseDto);
  }

  findOne(id: string) {
    const artist = checkExistenceOrThrow({
      id,
      map: this.artists,
      name: 'Artist',
    });

    return this.mapToResponseDto(artist);
  }

  update(id: string, updateArtistDto: UpdateArtistDto) {
    const artist = checkExistenceOrThrow({
      id,
      map: this.artists,
      name: 'Artist',
    });

    if (updateArtistDto.name !== undefined) {
      artist.name = updateArtistDto.name;
    }
    if (updateArtistDto.grammy !== undefined) {
      artist.grammy = updateArtistDto.grammy;
    }

    this.artists.set(id, artist);
    return this.mapToResponseDto(artist);
  }

  remove(id: string) {
    checkExistenceOrThrow({
      id,
      map: this.artists,
      name: 'Artist',
    });
    this.artists.delete(id);
  }
}
