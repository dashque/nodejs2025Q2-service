// interface Track {
//   id: string; // uuid v4
//   name: string;
//   artistId: string | null; // refers to Artist
//   albumId: string | null; // refers to Album
//   duration: number; // integer number
// }

import { IsUUID } from 'class-validator';

export class TrackResponseDto {
  id: string;
  name: string;
  artistId: string | null;
  albumId: string | null;
  duration: number;
}

export class DeleteTrackDto {
  @IsUUID()
  id: string;
}
