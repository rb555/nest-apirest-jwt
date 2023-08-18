import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReservationsService {

  constructor(
    @InjectRepository(Reservation)
    private reservationsRepository: Repository<Reservation>
  ){}

  async create(createReservationDto: CreateReservationDto) {
    const reservation = this.reservationsRepository.create(createReservationDto);
    return await this.reservationsRepository.save(reservation);
  }

  async findAll() {
    return await this.reservationsRepository.find();
  }

  async findOne(id: number) {
    return await this.reservationsRepository.findOneBy({id});
  }

  async update(id: number, updateReservationDto: UpdateReservationDto) {
    return await this.reservationsRepository.update(id, updateReservationDto);
  }

  async remove(id: number) {
    return await this.reservationsRepository.softDelete(id);
  }
}
