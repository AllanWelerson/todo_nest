import { Injectable } from "@nestjs/common";
import { User } from "./User.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ){}

  async findAll(): Promise<User[]>{
    return await this.usersRepository.find();
  }

  async getById(id: number){
    return await this.usersRepository.findOne(id);
  }

  async create(user: User) {
    const createdUser = this.usersRepository.save(user);
    
    return createdUser;
  }

  async update(id: number, user: User) {
    await this.usersRepository.update(id, user);

    return this.getById(id);
  }

  async delete(id: number) {
    return await this.usersRepository.delete(id);
  }
  
}