import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ){}

  async create(createBookDto: CreateBookDto) {
    const book = await this.booksRepository.findOneBy({title: createBookDto.title,
    });

    if(!book){
      throw new BadRequestException('Book not found');
    }

    return await this.booksRepository.save({
      ...createBookDto,
      book: book,
    });
  }

  async findAll() {
    return await this.booksRepository.find();
  }

  async findOne(id: number) {
    return await this.booksRepository.findOneBy({id});
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    return await this.booksRepository.update(id, updateBookDto);
  }

  async remove(id: number) {
    return  await this.booksRepository.softDelete(id);
  }
}
