import { Injectable } from '@nestjs/common';
import { UserEntity } from '../hard-coded/user';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>){}

  async findOne(username: string): Promise<UserEntity | undefined> {
    return this.usersRepository.findOne({ username });
  }
}
