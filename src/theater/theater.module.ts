import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TheaterController } from './theater.controller';
import { TheaterService } from './theater.service';
import { TheaterEntity } from './theater.entity';
import { PlayEntity } from 'src/play/play.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TheaterEntity,
      PlayEntity
    ])
  ],
  controllers: [TheaterController],
  providers: [TheaterService]
})
export class TheaterModule { }
