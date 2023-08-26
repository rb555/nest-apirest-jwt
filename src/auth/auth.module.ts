import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
//import { jwtConstants } from './constants/jwt.constant';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from 'process';

@Module({
  imports:[UsersModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('SECRET'),
        global: true,
        signOptions: {expiresIn: '1d'},
      }),
      inject: [ConfigService],
    })
  //JwtModule.register({
      //global: true,
      // secret: jwtConstants.secret,
      // signOptions: {expiresIn: '1d'},
   //}),
],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [JwtModule],
})
export class AuthModule {}
