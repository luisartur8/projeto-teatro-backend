import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { PlayService } from './play.service';
import { PlayDto } from './play.dto';

@Controller('play')
export class PlayController {
  constructor(private playService: PlayService) { }

  @Get()
  findAll() {
    return this.playService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.playService.findById(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() playDto: PlayDto) {
    return this.playService.create(playDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() playDto: PlayDto) {
    return this.playService.update(id, playDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playService.remove(id);
  }
}
