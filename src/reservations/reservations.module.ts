import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { Book } from 'src/books/entities/book.entity';
import { Reader } from 'src/readers/entities/reader.entity';
import { BooksModule } from 'src/books/books.module';
import { ReadersModule } from 'src/readers/readers.module';
import { BooksService } from 'src/books/books.service';
import { ReadersService } from 'src/readers/readers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Reservation]),
            TypeOrmModule.forFeature([Book]),
            TypeOrmModule.forFeature([Reader])],
  controllers: [ReservationsController],
  providers: [ReservationsService, BooksService, ReadersService],
  exports: [TypeOrmModule]
})

export class ReservationsModule {}
