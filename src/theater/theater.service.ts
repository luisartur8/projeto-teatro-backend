import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TheaterEntity } from "./theater.entity";
import { TheaterDto } from "./theater.dto";
import { Repository } from "typeorm";

@Injectable()
export class TheaterService {
  constructor(
    @InjectRepository(TheaterEntity)
    private theaterRepository: Repository<TheaterEntity>,
  ) { }

  findAll() {
    return this.theaterRepository.find();
  }

  create(theaterDto: TheaterDto) {
    const theaterEntity = this.theaterRepository.create(theaterDto);
    return this.theaterRepository.save(theaterEntity);
  }

  async update(id: string, theaterDto: TheaterDto) {
    return this.theaterRepository.save({
      ...theaterDto,
      id
    });
  }

  async findById(theaterId: string) {
    const find = await this.theaterRepository.findOne({
      where: { id: theaterId },
    });
    if (find === null) {
      throw new NotFoundException(
        'Teatro com ID ' + theaterId + ' não encontrado!',
      );
    }
    return find;
  }

  async remove(theaterId: string) {
    const find = await this.findById(theaterId);
    await this.theaterRepository.remove(find);
    return { ...find, id: theaterId };
  }
}
