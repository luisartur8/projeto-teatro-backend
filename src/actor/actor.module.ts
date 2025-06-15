import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorEntity } from './actor.entity';
import { ActorController } from './actor.controller';
import { ActorService } from './actor.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ActorEntity
    ])
  ],
  controllers: [ActorController],
  providers: [ActorService]
})
export class ActorModule { }
