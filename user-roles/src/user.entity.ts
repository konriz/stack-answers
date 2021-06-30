import { Role } from "./role.enum";

export class User {
  userId: number;
  username: string;
  password: string;
  roles: Role[];
}

// example of TypeORM Entity
@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn() userId: number;
  @Column() username: string;
  @Column() password: string;
  // should have some kind of join table
  @ManyToMany() roles: Role[];
}
