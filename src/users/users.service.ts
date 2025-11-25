import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserResponseDto } from './dto/user-response.dto';
import { checkExistenceOrThrow } from '../utils/utils';

@Injectable()
export class UsersService {
  private readonly users = new Map<string, User>();

  private mapToResponseDto(user: User): UserResponseDto {
    return {
      id: user.id,
      login: user.login,
      version: user.version,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  create(createUserDto: CreateUserDto) {
    const newUser = new User(createUserDto.login, createUserDto.password);
    this.users.set(newUser.id, newUser);
    return this.mapToResponseDto(newUser);
  }

  findAll() {
    return Array.from(this.users.values()).map(this.mapToResponseDto);
  }

  findOne(id: string) {
    const user = checkExistenceOrThrow({
      id,
      map: this.users,
      name: 'User',
    });
    return this.mapToResponseDto(user);
  }

  update(id: string, updateUserDto: UpdateUserDto): UserResponseDto {
    const user = checkExistenceOrThrow({
      id,
      map: this.users,
      name: 'User',
    });

    if (user.password !== updateUserDto.oldPassword) {
      throw new ForbiddenException('Old password is wrong');
    }

    user.password = updateUserDto.newPassword;
    user.version += 1;
    user.updatedAt = Date.now();

    this.users.set(id, user);
    return this.mapToResponseDto(user);
  }

  remove(id: string) {
    checkExistenceOrThrow({
      id,
      map: this.users,
      name: 'User',
    });

    this.users.delete(id);
  }
}
