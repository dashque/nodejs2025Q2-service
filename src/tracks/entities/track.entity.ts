import { v4 as uuid4 } from 'uuid';

export class Track {
  id: string;
  name: string;
  artistId: string | null;
  albumId: string | null;
  duration: number;

  constructor(
    name: string,
    artistId: string,
    albumId: string,
    duration: number,
  ) {
    this.id = uuid4();
    this.name = name;
    this.artistId = artistId;
    this.albumId = albumId;
    this.duration = duration;
  }
}
