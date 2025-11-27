import { Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { Favorite } from './entities/favorite.entity';
import { FavoritesResponseDto } from './dto/favorites.dto';

@Injectable()
export class FavoritesService {
  private readonly favorites = new Map<string, Favorite>();

  private mapToResponseDto(favorites: Favorite): FavoritesResponseDto {
    return {
      artists: favorites.artists,
      albums: favorites.albums,
      tracks: favorites.tracks,
    };
  }

  create(createFavoriteDto: CreateFavoriteDto) {
    return 'This action adds a new favorite';
  }

  findAll() {
    return `This action returns all favorites`;
  }

  findOne(id: string) {
    return `This action returns a #${id} favorite`;
  }

  update(id: string, updateFavoriteDto: UpdateFavoriteDto) {
    return `This action updates a #${id} favorite`;
  }

  remove(id: string) {
    return `This action removes a #${id} favorite`;
  }
}
