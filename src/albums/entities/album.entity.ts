import { v4 as uuid4 } from 'uuid';

export class Album {
  id: string;
  name: string;
  year: number;
  artistId: string | null;

  constructor({ name, artistId, year }: Omit<Album, 'id'>) {
    this.id = uuid4();
    this.name = name;
    this.year = year;
    this.artistId = artistId;
  }
}
