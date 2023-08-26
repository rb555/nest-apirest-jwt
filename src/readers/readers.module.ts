import { Module } from '@nestjs/common';
import { ReadersService } from './readers.service';
import { ReadersController } from './readers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/books/entities/book.entity';
import { Reader } from './entities/reader.entity';
import { BooksModule } from 'src/books/books.module';
import { BooksService } from 'src/books/books.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[TypeOrmModule.forFeature([Reader,Book]), AuthModule],
  controllers: [ReadersController],
  providers: [ReadersService],
  exports: [TypeOrmModule]
})
export class ReadersModule {}
