import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayEntity } from './play.entity';
import { PlayController } from './play.controller';
import { PlayService } from './play.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PlayEntity
    ])
  ],
  controllers: [PlayController],
  providers: [PlayService]
})
export class PlayModule { }
