import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DirectorEntity } from "./director.entity";
import { DirectorDto } from "./director.dto";
import { Repository } from "typeorm";

@Injectable()
export class DirectorService {
  constructor(
    @InjectRepository(DirectorEntity)
    private directorRepository: Repository<DirectorEntity>,
  ) { }

  findAll() {
    return this.directorRepository.find();
  }

  create(directorDto: DirectorDto) {
    const directorEntity = this.directorRepository.create(directorDto);
    return this.directorRepository.save(directorEntity);
  }

  async update(id: string, directorDto: DirectorDto) {
    return this.directorRepository.save({
      ...directorDto,
      id
    });
  }

  async findById(directorId: string) {
    const find = await this.directorRepository.findOne({
      where: { id: directorId },
    });
    if (find === null) {
      throw new NotFoundException(
        'Diretor com ID ' + directorId + ' não encontrado!',
      );
    }
    return find;
  }

  async remove(directorId: string) {
    const find = await this.findById(directorId);
    await this.directorRepository.remove(find);
    return { ...find, id: directorId };
  }
}
