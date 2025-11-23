import { PartialType } from '@nestjs/swagger';
import { CreateAlbumDto } from './create-album.dto';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsUUID,
  ValidateIf,
} from 'class-validator';

export class UpdateAlbumDto extends PartialType(CreateAlbumDto) {
  @IsNotEmpty()
  name: string;

  @IsInt()
  year: number;

  @IsOptional()
  @ValidateIf((_, v) => v !== null)
  @IsUUID()
  artistId: string | null;
}
