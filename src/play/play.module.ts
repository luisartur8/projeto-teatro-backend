import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayController } from './play.controller';
import { PlayService } from './play.service';
import { PlayEntity } from './play.entity';
import { DirectorEntity } from 'src/director/director.entity';
import { TheaterEntity } from 'src/theater/theater.entity';
import { ActorEntity } from 'src/actor/actor.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PlayEntity,
      DirectorEntity,
      TheaterEntity,
      ActorEntity,
    ])
  ],
  controllers: [PlayController],
  providers: [PlayService]
})
export class PlayModule { }
