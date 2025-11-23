// interface Album {
//   id: string; // uuid v4
//   name: string;
//   year: number;
//   artistId: string | null; // refers to Artist
// }

import { IsUUID } from 'class-validator';

export class AlbumResponseDto {
  id: string;
  name: string;
  year: number;
  artistId: string | null;
}

export class DeleteAlbumDto {
  @IsUUID()
  id: string;
}
