import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserResponseDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private readonly users = new Map<string, User>();

  private mapToResponseDto(user: User): UserResponseDto {
    return {
      id: user.id,
      login: user.login,
      version: user.version,
      createAt: user.createAt,
      updateAt: user.updateAt,
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
    const user = this.users.get(id);
    if (!user) {
      throw new Error('User not found');
    }
    return this.mapToResponseDto(user);
  }

  update(id: string, updateUserDto: UpdateUserDto): UserResponseDto {
    const user = this.users.get(id);
    if (!user) {
      throw new Error('User not found');
    }

    if (user.password !== updateUserDto.oldPassword) {
      throw new Error('Old password is wrong');
    }

    user.password = updateUserDto.newPassword;
    user.version += 1;
    user.updateAt = Date.now();

    this.users.set(id, user);
    return this.mapToResponseDto(user);
  }

  remove(id: string) {
    const user = this.users.get(id);
    if (!user) {
      throw new Error('User not found');
    }

    this.users.delete(id);

    return `This action removes a #${user.id} user`;
  }
}
