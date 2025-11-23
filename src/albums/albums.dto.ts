// interface Album {
//   id: string; // uuid v4
//   name: string;
//   year: number;
//   artistId: string | null; // refers to Artist
// }

import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsUUID,
  ValidateIf,
} from 'class-validator';

export class CreateAlbumDto {
  @IsNotEmpty()
  name: string;

  @IsInt()
  year: number;

  @IsOptional()
  @ValidateIf((_, v) => v !== null)
  @IsUUID()
  artistId: string | null;
}

export class AlbumResponseDto {
  id: string;
  name: string;
  year: number;
  artistId: string | null;
}

export class UpdateAlbumDto {
  @IsNotEmpty()
  name: string;

  @IsInt()
  year: number;

  @IsOptional()
  @ValidateIf((_, v) => v !== null)
  @IsUUID()
  artistId: string | null;
}

export class DeleteAlbumDto {
  @IsUUID()
  id: string;
}
