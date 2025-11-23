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
