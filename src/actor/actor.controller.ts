import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActorDto } from './actor.dto';

@Controller('actor')
export class ActorController {
  constructor(private readonly actorService: ActorService) { }

  @Get('info')
  findActorInfo() {
    return this.actorService.findActorInfo();
  }

  @Get()
  findAll() {
    return this.actorService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.actorService.findById(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() actorDto: ActorDto) {
    return this.actorService.create(actorDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() actorDto: ActorDto) {
    return this.actorService.update(id, actorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actorService.remove(id);
  }
}
