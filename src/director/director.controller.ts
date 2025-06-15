import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { DirectorService } from './director.service';
import { DirectorDto } from './director.dto';

@Controller('director')
export class DirectorController {
  constructor(private directorService: DirectorService) { }

  @Get()
  findAll() {
    return this.directorService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.directorService.findById(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() directorDto: DirectorDto) {
    return this.directorService.create(directorDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() directorDto: DirectorDto) {
    return this.directorService.update(id, directorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.directorService.remove(id);
  }
}
