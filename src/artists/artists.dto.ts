// interface Artist {
//   id: string; // uuid v4
//   name: string;
//   grammy: boolean;
// }

import { IsBoolean, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateArtistDto {
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  grammy: boolean;
}

export class ArtistResponseDto {
  id: string;
  name: string;
  grammy: boolean;
}

export class UpdateArtistDto {
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  grammy: boolean;
}

export class DeleteArtistDto {
  @IsUUID()
  id: string;
}
