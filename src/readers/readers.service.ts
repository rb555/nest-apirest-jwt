import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateReaderDto } from './dto/create-reader.dto';
import { UpdateReaderDto } from './dto/update-reader.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reader } from './entities/reader.entity';
import { Repository } from 'typeorm';
import { Book } from 'src/books/entities/book.entity';

@Injectable()
export class ReadersService {

  constructor(
    @InjectRepository(Reader)
    private readersRepository: Repository<Reader>,

   
  ){}

  async create(createReaderDto: CreateReaderDto) {
    const reader = this.readersRepository.create(createReaderDto);

    return await this.readersRepository.save(reader);
  }

  async findAll() {
    return await this.readersRepository.find();
  }

  async findOne(id: number) {
    return await this.readersRepository.findOneBy({id});
  }

  async update(id: number, updateReaderDto: UpdateReaderDto) {
    return await this.readersRepository.update(id, updateReaderDto);
  }

  async remove(id: number) {
    return await this.readersRepository.softDelete(id);
  }
}
