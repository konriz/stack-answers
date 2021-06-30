import { Role } from "../role.enum";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn() userId: number;
  @Column() username: string;
  @Column() password: string;
  // should have some kind of join table
  @ManyToMany() roles: Role[];
}
