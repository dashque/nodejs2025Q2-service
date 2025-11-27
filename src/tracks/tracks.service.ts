import { Injectable } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { Track } from './entities/track.entity';
import { TrackResponseDto } from './dto/track.dto';
import { checkExistenceOrThrow } from '../utils/utils';

@Injectable()
export class TracksService {
  private readonly tracks = new Map<string, Track>();

  private mapToResponseDto(track: Track): TrackResponseDto {
    return {
      id: track.id,
      name: track.name,
      artistId: track.artistId ?? null,
      albumId: track.albumId ?? null,
      duration: track.duration,
    };
  }

  create(createTrackDto: CreateTrackDto) {
    const newTrack = new Track({
      name: createTrackDto.name,
      artistId: createTrackDto.artistId,
      albumId: createTrackDto.albumId,
      duration: createTrackDto.duration,
    });
    this.tracks.set(newTrack.id, newTrack);
    return this.mapToResponseDto(newTrack);
  }

  findAll() {
    return Array.from(this.tracks.values()).map(this.mapToResponseDto);
  }

  findOne(id: string) {
    const track = checkExistenceOrThrow({
      id,
      map: this.tracks,
      name: 'Track',
    });
    return this.mapToResponseDto(track);
  }

  update(id: string, updateTrackDto: UpdateTrackDto) {
    const track = checkExistenceOrThrow({
      id,
      map: this.tracks,
      name: 'Track',
    });

    track.name = updateTrackDto.name;
    track.artistId = updateTrackDto.artistId;
    track.albumId = updateTrackDto.albumId;

    this.tracks.set(id, track);
    return this.mapToResponseDto(track);
  }

  remove(id: string) {
    checkExistenceOrThrow({
      id,
      map: this.tracks,
      name: 'Track',
    });

    this.tracks.delete(id);
  }

  getRawTracks(): Map<string, Track> {
    return this.tracks;
  }
}
