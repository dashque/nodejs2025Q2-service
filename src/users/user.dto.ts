// interface User {
//   id: string; // uuid v4
//   login: string;
//   password: string;
//   version: number; // integer number, increments on update
//   createdAt: number; // timestamp of creation
//   updatedAt: number; // timestamp of last update
// }

import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  login: string;

  @IsNotEmpty()
  password: string;
}

export class UserResponseDto {
  @IsUUID()
  id: string;

  @IsNotEmpty()
  login: string;

  @IsNumber()
  version: number;

  @IsNumber()
  createAt: number;

  @IsNumber()
  updateAt: number;
}

export class UpdateUserDto {
  @IsNotEmpty()
  oldPassword: string;

  @IsNotEmpty()
  newPassword: string;
}

export class DeleteUserDto {
  @IsUUID()
  id: string;
}
