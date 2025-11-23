import { PartialType } from '@nestjs/swagger';
import { CreateTrackDto } from './create-track.dto';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsUUID,
  ValidateIf,
} from 'class-validator';

export class UpdateTrackDto extends PartialType(CreateTrackDto) {
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
