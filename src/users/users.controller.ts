import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from './shared/Users.service';
import { User } from './shared/User.entity';

@Controller('users')
export class UsersController {

  constructor(
    private usersService: UsersService,
  ){}

  @Get()
  async getAll(): Promise<User[]>{
    return this.usersService.findAll();
  } 

  @Get(':id')
  async getById(@Param('id') id: number): Promise<User> {
    return this.usersService.getById(id);
  }

  @Post()
  async create(@Body() user: User): Promise<User>{
    return this.usersService.create(user);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() user: User): Promise<User>{
    return this.usersService.update(id, user);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    this.usersService.delete(id);
  }

}
