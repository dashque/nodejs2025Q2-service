// interface User {
//   id: string; // uuid v4
//   login: string;
//   password: string;
//   version: number; // integer number, increments on update
//   createdAt: number; // timestamp of creation
//   updatedAt: number; // timestamp of last update
// }

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
