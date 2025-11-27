import {
  BadRequestException,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { validate } from 'uuid';
import { Favorite } from '../favorites/entities/favorite.entity';
import { Track } from '../tracks/entities/track.entity';
import { Album } from '../albums/entities/album.entity';
import { Artist } from '../artists/entities/artist.entity';

export const checkExistenceOrThrow = <T>({
  id,
  map,
  name,
}: {
  id: string;
  map: Map<PropertyKey, T>;
  name: string;
}) => {
  const elem = map.get(id);
  if (!elem) {
    throw new NotFoundException(`${name} not found`);
  }
  return elem;
};

export const addElementToFavs = <
  K extends (Track | Album | Artist)[],
  T extends Track | Album | Artist,
>({
  id,
  data,
  name,
  rawData,
}: {
  id: string;
  data: K;
  name: string;
  rawData: Map<PropertyKey, T>;
}) => {
  if (!validate(id)) {
    throw new BadRequestException(`Invalid ${name} format`);
  }

  const existingTrack = data.find((elem) => elem.id === id);
  if (existingTrack) {
    throw new UnprocessableEntityException(`${name} already in favorites`);
  }

  const elem = rawData.get(id);
  if (!elem) {
    throw new UnprocessableEntityException(`${name} not found`);
  }

  data.push(elem);
  return elem;
};

export const filterData = <
  K extends Favorite,
  T extends Track | Album | Artist,
>({
  id,
  data,
  name,
}: {
  id: string;
  data: K;
  name: string;
}) => {
  const initialLength = data[name].length;
  const filteredData = data[name].filter((elem: T) => elem.id !== id);
  if (filteredData.length === initialLength) {
    throw new NotFoundException(`${name} not found in favorites`);
  }
  data[name] = filteredData;
  return filteredData;
};
