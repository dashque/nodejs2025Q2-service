import { v4 as uuid4 } from 'uuid';

export class Artist {
  id: string;
  name: string;
  grammy: boolean;

  constructor(name: string, grammy: boolean) {
    this.id = uuid4();
    this.name = name;
    this.grammy = grammy;
  }
}
