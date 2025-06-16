import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from '@nestjs/common';
import { TheaterService } from './theater.service';
import { TheaterDto } from './theater.dto';

@Controller('theater')
export class TheaterController {
  constructor(private readonly theaterService: TheaterService) { }

  @Get()
  findPaginated(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('order') order: 'asc' | 'desc' = 'asc',
  ) {
    return this.theaterService.findPaginated(Number(page), Number(limit), order);
  }

  @Get()
  findAll() {
    return this.theaterService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.theaterService.findById(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() theaterDto: TheaterDto) {
    return this.theaterService.create(theaterDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() theaterDto: TheaterDto) {
    return this.theaterService.update(id, theaterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.theaterService.remove(id);
  }
}
