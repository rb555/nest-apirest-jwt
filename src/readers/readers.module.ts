import { Module } from '@nestjs/common';
import { ReadersService } from './readers.service';
import { ReadersController } from './readers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/books/entities/book.entity';
import { Reader } from './entities/reader.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Reader])],
  controllers: [ReadersController],
  providers: [ReadersService],
})
export class ReadersModule {}
