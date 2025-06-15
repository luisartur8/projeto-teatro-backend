import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DirectorEntity } from './director.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DirectorEntity
    ])],
})
export class DirectorModule { }
