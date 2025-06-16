import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DirectorEntity } from './director.entity';
import { DirectorController } from './director.controller';
import { DirectorService } from './director.service';
import { PlayEntity } from 'src/play/play.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DirectorEntity,
      PlayEntity
    ])
  ],
  controllers: [DirectorController],
  providers: [DirectorService]
})
export class DirectorModule { }
