export class User {
  id: string;
  login: string;
  password: string;
  version: number;
  createAt: number;
  updateAt: number;

  constructor(login: string, password: string) {
    const timeStamp = Date.now();

    this.id = crypto.randomUUID();
    this.login = login;
    this.password = password;
    this.version = 1;
    this.createAt = timeStamp;
    this.updateAt = timeStamp;
  }
}
