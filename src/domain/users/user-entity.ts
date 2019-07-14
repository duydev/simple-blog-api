export class User {
  id?: number;
  name: string;
  email: string;
  password: string;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id,
    name,
    email,
    password,
    lastLogin,
    createdAt,
    updatedAt
  }: any) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.lastLogin = lastLogin;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
