import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from '../auth/auth.service';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
  ) {}

  @Post('register')
  async register(@Body() body: { username: string; password: string }) {
    const user = await this.usersService.create(body.username, body.password);
  }
}
