import {
    Controller,
    Post,
    Body,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { AuthService } from './auth.service';
  import { LoginDto } from './login.entity';
  
  @Controller('auth')
  export class AuthController {
    constructor(private readonly authService: AuthService) {}
  
    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        const token = await this.authService.validateUser(loginDto.username, loginDto.password);
        if (!token) {
            throw new HttpException(
            'Invalid username or password',
            HttpStatus.UNAUTHORIZED,
            );
        }
        return { accessToken: token };
    }
  }