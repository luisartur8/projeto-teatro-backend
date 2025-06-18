import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PlayDto } from "./play.dto";
import { Repository } from "typeorm";
import { PlayEntity } from "./play.entity";
import { DirectorEntity } from "src/director/director.entity";
import { TheaterEntity } from "src/theater/theater.entity";
import { ActorEntity } from "src/actor/actor.entity";

@Injectable()
export class PlayService {
  constructor(
    @InjectRepository(PlayEntity)
    private readonly playRepository: Repository<PlayEntity>,
    @InjectRepository(DirectorEntity)
    private readonly directorRepository: Repository<DirectorEntity>,
    @InjectRepository(TheaterEntity)
    private readonly theaterRepository: Repository<TheaterEntity>,
    @InjectRepository(ActorEntity)
    private readonly actorRepository: Repository<ActorEntity>,
  ) { }

  findAll() {
    return this.playRepository.find({ relations: ['director', 'theater', 'actor'] });
  }

  async findById(id: string) {
    const play = await this.playRepository.findOne({
      where: { id },
      relations: ['director', 'theater', 'actor']
    });
    if (!play) throw new NotFoundException('Peça não encontrada');
    return play;
  }

  async create(playDto: PlayDto) {
    const play = await this.findById(playDto.id);
    if (play && playDto.id) {
      throw new BadRequestException("Peça já existe")
    }
    const playEntity = this.playRepository.create({
      ...playDto,
      director: await this.directorRepository.findOneByOrFail({ id: playDto.directorId }),
      theater: await this.theaterRepository.findOneByOrFail({ id: playDto.theaterId }),
      actor: playDto.actorId ? await this.actorRepository.findByIds(playDto.actorId) : [],
    });
    return this.playRepository.save(playEntity);
  }

  async update(id: string, playDto: PlayDto) {
    const play = await this.playRepository.findOne({
      where: { id },
      relations: ['director', 'theater', 'actor'],
    });

    if (!play) {
      throw new NotFoundException('Peça com ID ' + id + ' não encontrada!');
    }

    if (playDto.directorId) play.director = await this.directorRepository.findOneByOrFail({ id: playDto.directorId });
    if (playDto.theaterId) play.theater = await this.theaterRepository.findOneByOrFail({ id: playDto.theaterId });
    if (playDto.actorId) play.actor = await this.actorRepository.findByIds(playDto.actorId);

    Object.assign(play, {
      name: playDto.name,
      image: playDto.image,
      synopsis: playDto.synopsis,
      gender: playDto.gender,
      address: playDto.address,
    });

    return this.playRepository.save(play);
  }

  async remove(id: string) {
    const play = await this.playRepository.findOne({ where: { id }, relations: ['actor'] });
    if (!play) throw new NotFoundException('Peça não encontrada');

    play.actor = [];
    await this.playRepository.save(play);

    await this.playRepository.remove(play);
    return { ...play, id };
  }

}
