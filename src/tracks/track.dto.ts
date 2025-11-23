// interface Track {
//   id: string; // uuid v4
//   name: string;
//   artistId: string | null; // refers to Artist
//   albumId: string | null; // refers to Album
//   duration: number; // integer number
// }

import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsUUID,
  ValidateIf,
} from 'class-validator';

export class CreateTrackDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @ValidateIf((_, v) => v !== null)
  @IsUUID()
  artistId: string | null;

  @IsOptional()
  @ValidateIf((_, v) => v !== null)
  @IsUUID()
  albumId: string | null;

  @IsInt()
  duration: number;
}

export class TrackResponseDto {
  id: string;
  name: string;
  artistId: string | null;
  albumId: string | null;
  duration: number;
}

export class UpdateTrackDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @ValidateIf((_, v) => v !== null)
  @IsUUID()
  artistId: string | null;

  @IsOptional()
  @ValidateIf((_, v) => v !== null)
  @IsUUID()
  albumId: string | null;

  @IsInt()
  duration: number;
}

export class DeleteTrackDto {
  @IsUUID()
  id: string;
}
