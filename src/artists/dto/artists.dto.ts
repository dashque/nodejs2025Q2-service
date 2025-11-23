// interface Artist {
//   id: string; // uuid v4
//   name: string;
//   grammy: boolean;
// }

import { IsUUID } from 'class-validator';

export class ArtistResponseDto {
  id: string;
  name: string;
  grammy: boolean;
}

export class DeleteArtistDto {
  @IsUUID()
  id: string;
}
