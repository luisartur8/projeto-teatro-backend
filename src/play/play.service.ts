import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PlayEntity } from "./play.entity";
import { PlayDto } from "./play.dto";
import { Repository } from "typeorm";

@Injectable()
export class PlayService {
  constructor(
    @InjectRepository(PlayEntity)
    private playRepository: Repository<PlayEntity>,
  ) { }

  findAll() {
    return this.playRepository.find();
  }

  create(playDto: PlayDto) {
    const playEntity = this.playRepository.create(playDto);
    return this.playRepository.save(playEntity);
  }

  async update(id: string, playDto: PlayDto) {
    return this.playRepository.save({
      ...playDto,
      id
    });
  }

  async findById(playId: string) {
    const find = await this.playRepository.findOne({
      where: { id: playId },
    });
    if (find === null) {
      throw new NotFoundException(
        'Peça com ID ' + playId + ' não encontrada!',
      );
    }
    return find;
  }

  async remove(playId: string) {
    const find = await this.findById(playId);
    await this.playRepository.remove(find);
    return { ...find, id: playId };
  }
}
