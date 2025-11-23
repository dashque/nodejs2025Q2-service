import { v4 as uuid4 } from 'uuid';

export class User {
  id: string;
  login: string;
  password: string;
  version: number;
  createdAt: number;
  updatedAt: number;

  constructor(login: string, password: string) {
    const timeStamp = Date.now();

    this.id = uuid4();
    this.login = login;
    this.password = password;
    this.version = 1;
    this.createdAt = timeStamp;
    this.updatedAt = timeStamp;
  }
}
