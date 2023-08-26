import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Request } from 'express';
import { Role } from '../common/enums/rol.enum';
import { Auth } from './decorators/auth.decorators';
import { ActiveUser } from 'src/common/enums/decorators/active-user.decorator';
import { UserActiveInterface } from 'src/common/enums/interfaces/user-active.interface';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

interface RequestWithUser extends Request{
    user: {
        email: string;
        role: string;
    }
}

@ApiTags('auth')
@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
    ){}

    @Post('register')
    register(
        @Body()
        registerDto: RegisterDto,
    ){
        console.log(registerDto);
        return this.authService.register(registerDto);
    }

    @Post('login')
    login(
        @Body()
        loginDto: LoginDto,
    ){
        return this.authService.login(loginDto);
    }

    @ApiBearerAuth()
    @Get('profile')
    @Auth(Role.ADMIN)
    profile(@ActiveUser() user: UserActiveInterface) {  
        console.log(user)
        return this.authService.profile(user);
        }
    }

