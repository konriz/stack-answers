import { Role } from "../role.enum";

export class User {
  userId: number;
  username: string;
  password: string;
  roles: Role[];
}
