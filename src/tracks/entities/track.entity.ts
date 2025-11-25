import { v4 as uuid4 } from 'uuid';

export class Track {
  id: string;
  name: string;
  artistId: string | null;
  albumId: string | null;
  duration: number;

  constructor(data: Omit<Track, 'id'>) {
    this.id = uuid4();
    this.name = data.name;
    this.artistId = data.artistId;
    this.albumId = data.albumId;
    this.duration = data.duration;
  }
}
