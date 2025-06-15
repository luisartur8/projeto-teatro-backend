import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ActorEntity } from "./actor.entity";
import { ActorDto } from "./actor.dto";
import { Repository } from "typeorm";

@Injectable()
export class ActorService {
  constructor(
    @InjectRepository(ActorEntity)
    private actorRepository: Repository<ActorEntity>,
  ) { }

  findAll() {
    return this.actorRepository.find();
  }

  create(actorDto: ActorDto) {
    const actorEntity = this.actorRepository.create(actorDto);
    return this.actorRepository.save(actorEntity);
  }

  async update(id: string, actorDto: ActorDto) {
    return this.actorRepository.save({
      ...actorDto,
      id
    });
  }

  async findById(actorId: string) {
    const find = await this.actorRepository.findOne({
      where: { id: actorId },
    });
    if (find === null) {
      throw new NotFoundException(
        'Ator com ID ' + actorId + ' não encontrado!',
      );
    }
    return find;
  }

  async remove(actorId: string) {
    const find = await this.findById(actorId);
    await this.actorRepository.remove(find);
    return { ...find, id: actorId };
  }
}