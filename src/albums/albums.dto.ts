// interface Album {
//   id: string; // uuid v4
//   name: string;
//   year: number;
//   artistId: string | null; // refers to Artist
// }

import { IsNotEmpty, IsNumber, IsOptional, IsUUID } from 'class-validator';

export class CreateAlbumDto {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  year: number;

  @IsOptional()
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

  @IsNumber()
  year: number;

  @IsOptional()
  @IsUUID()
  artistId: string | null;
}

export class DeleteAlbumDto {
  @IsUUID()
  id: string;
}
