import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReadersModule } from './readers/readers.module';
import { BooksModule } from './books/books.module';
import { ReservationsModule } from './reservations/reservations.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 4001,
      username: 'user_crud',
      password: 'labiblioteca',
      database: 'db_library',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ReadersModule,
    BooksModule,
    ReservationsModule,
    UsersModule,
    AuthModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
