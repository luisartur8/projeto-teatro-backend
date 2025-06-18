import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DirectorDto } from "./director.dto";
import { Repository } from "typeorm";
import { DirectorEntity } from "./director.entity";
import { PlayEntity } from "src/play/play.entity";

@Injectable()
export class DirectorService {
  constructor(
    @InjectRepository(DirectorEntity)
    private readonly directorRepository: Repository<DirectorEntity>,
    @InjectRepository(PlayEntity)
    private readonly playRepository: Repository<PlayEntity>,
  ) { }

  findAll() {
    return this.directorRepository.find();
  }

  async findById(id: string) {
    const director = await this.directorRepository.findOne({ where: { id } });
    if (!director) throw new NotFoundException('Diretor não encontrado');
    return director;
  }

  async create(directorDto: DirectorDto) {
    await this.validateBusinessRules(directorDto);
    const actor = await this.findById(directorDto.id);
    if (actor && directorDto.id) {
      throw new BadRequestException("Diretor já existe")
    }
    const directorEntity = this.directorRepository.create(directorDto);
    return this.directorRepository.save(directorEntity);
  }

  async update(id: string, directorDto: DirectorDto) {
    await this.validateBusinessRules(directorDto);
    const director = await this.findById(id);
    Object.assign(director, directorDto);
    return this.directorRepository.save(director);
  }

  async remove(id: string) {
    const director = await this.directorRepository.findOne({
      where: { id },
      relations: ['play'],
    });

    if (!director) {
      throw new NotFoundException('Diretor não encontrado');
    }

    const plays = await this.playRepository.find({
      where: { director: { id } },
    });

    for (const play of plays) {
      play.director = null;
      await this.playRepository.save(play);
    }

    await this.directorRepository.remove(director);
    return { ...director, id };
  }

  private async validateBusinessRules(directorDto: DirectorDto) {
    const { experience, email, gender } = directorDto;
    await this.validateExperience(experience); // Deve conter algum número
    await this.validateEmail(email); // Deve ser um email válido
    await this.validateGender(gender); // Deve ser um genero válido (F ou M)
  }

  private async validateExperience(experience: string) {
    if (!/\d/.test(experience)) throw new BadRequestException('A experiencia deve conter números');
  }

  private async validateEmail(email: string) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new BadRequestException('O email deve ser válido');
  }

  private async validateGender(gender: string) {
    if (!/^[FM]$/.test(gender)) throw new BadRequestException('O genero deve ser F ou M');
  }
}
