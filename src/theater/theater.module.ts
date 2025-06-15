import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TheaterEntity } from './theater.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TheaterEntity
    ])],
})
export class TheaterModule { }
