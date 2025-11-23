import { IsUUID } from 'class-validator';

export class UserResponseDto {
  id: string;
  login: string;
  version: number;
  createAt: number;
  updateAt: number;
}

export class DeleteUserDto {
  @IsUUID()
  id: string;
}
