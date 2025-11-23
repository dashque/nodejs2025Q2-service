// type UserType = {
//   id: string; // uuid v4
//   login: string;
//   password: string;
//   version: number; // integer number, increments on update
//   createdAt: number; // timestamp of creation
//   updatedAt: number; // timestamp of last update
// };

export class User {
  id: string;
  login: string;
  password: string;
  version: number;
  createdAt: number;
  updatedAt: number;

  constructor(login: string, password: string) {
    const timeStamp = Date.now();

    this.id = crypto.randomUUID();
    this.login = login;
    this.password = password;
    this.version = 1;
    this.createdAt = timeStamp;
    this.updatedAt = timeStamp;
  }

  update({
    oldPassword,
    newPassword,
  }: {
    oldPassword: string;
    newPassword: string;
  }) {
    if (this.password !== oldPassword) {
      throw new Error('Incorrect old password');
    }
    this.password = newPassword;
    this.version++;
    this.updatedAt = Date.now();
  }
}
