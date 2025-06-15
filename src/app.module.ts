import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { ActorModule } from './actor/actor.module';
import { DirectorModule } from './director/director.module';
import { PlayModule } from './play/play.module';
import { TheaterModule } from './theater/theater.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    ActorModule,
    DirectorModule,
    PlayModule,
    TheaterModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
