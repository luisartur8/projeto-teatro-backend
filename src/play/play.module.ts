import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayEntity } from './play.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PlayEntity
    ])],
})
export class PlayModule { }
