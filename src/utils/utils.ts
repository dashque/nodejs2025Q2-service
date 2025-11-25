import { NotFoundException } from '@nestjs/common';

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
