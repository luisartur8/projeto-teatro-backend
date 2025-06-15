import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TheaterEntity } from './theater.entity';
import { TheaterController } from './theater.controller';
import { TheaterService } from './theater.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TheaterEntity
    ])
  ],
  controllers: [TheaterController],
  providers: [TheaterService]
})
export class TheaterModule { }
