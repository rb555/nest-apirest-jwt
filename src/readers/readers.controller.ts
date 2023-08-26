import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReadersService } from './readers.service';
import { CreateReaderDto } from './dto/create-reader.dto';
import { UpdateReaderDto } from './dto/update-reader.dto';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { Role } from 'src/common/enums/rol.enum';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@ApiTags('readers')
@ApiBearerAuth()
@Auth(Role.ADMIN)
@Controller('readers')
export class ReadersController {
  constructor(private readonly readersService: ReadersService) {}

  @Post()
  create(@Body() createReaderDto: CreateReaderDto) {
    return this.readersService.create(createReaderDto);
  }

  @Get()
  findAll() {
    return this.readersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.readersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateReaderDto: UpdateReaderDto) {
    return this.readersService.update(id, updateReaderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.readersService.remove(id);
  }
}
