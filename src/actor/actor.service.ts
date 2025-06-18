import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ActorEntity } from "./actor.entity";
import { ActorDto } from "./actor.dto";
import { Repository } from "typeorm";

@Injectable()
export class ActorService {
  constructor(
    @InjectRepository(ActorEntity)
    private readonly actorRepository: Repository<ActorEntity>,
  ) { }

  private readonly validDDDs = [
    '11', '12', '13', '14', '15', '16', '17', '18', '19',
    '21', '22', '24', '27', '28',
    '31', '32', '33', '34', '35', '37', '38',
    '41', '42', '43', '44', '45', '46', '47', '48', '49',
    '51', '53', '54', '55',
    '61', '62', '63', '64', '65', '66', '67', '68', '69',
    '71', '73', '74', '75', '77', '79',
    '81', '82', '83', '84', '85', '86', '87', '88', '89',
    '91', '92', '93', '94', '95', '96', '97', '98', '99'
  ];

  async findActorInfo() {
    const actors = await this.findAll();

    let homem = 0, mulher = 0

    actors.map(actor => {
      if (actor.gender.toUpperCase() === 'M') homem++;
      if (actor.gender.toUpperCase() === 'F') mulher++;
    })

    return {
      homem: {
        quantidade: homem,
        percentual: ((homem / actors.length) * 100).toFixed(2)
      },
      mulher: {
        quantidade: mulher,
        percentual: ((mulher / actors.length) * 100).toFixed(2)
      }
    }
  }

  findAll() {
    return this.actorRepository.find();
  }

  async findById(id: string) {
    const actor = await this.actorRepository.findOne({ where: { id } });
    if (!actor) throw new NotFoundException('Ator não encontrado');
    return actor;
  }

  async create(actorDto: ActorDto) {
    await this.validateBusinessRules(actorDto);
    const actor = await this.findById(actorDto.id);
    if (actor && actorDto.id) {
      throw new BadRequestException("Ator já existe")
    }
    const actorEntity = this.actorRepository.create(actorDto);
    return this.actorRepository.save(actorEntity);
  }

  async update(id: string, actorDto: ActorDto) {
    await this.validateBusinessRules(actorDto);
    const actor = await this.findById(id);
    Object.assign(actor, actorDto);
    return this.actorRepository.save(actor);
  }

  async remove(id: string) {
    const actor = await this.actorRepository.findOne({ where: { id }, relations: ['play'] });
    if (!actor) throw new NotFoundException('Ator não encontrado');

    actor.play = [];
    await this.actorRepository.save(actor);

    await this.actorRepository.remove(actor);
    return { ...actor, id };
  }

  private async validateBusinessRules(actorDto: ActorDto) {
    const { name, phone, birth_date } = actorDto;
    await this.validateName(name); // Nome só com letras
    await this.validatePhone(phone); // Telefone válido
    await this.validateBirthDate(birth_date); // Mais velho que 120 anos
  }

  private async validateName(name: string) {
    if (/[^\p{L}]/u.test(name)) throw new BadRequestException('O nome só pode ter letras');
  }

  private async validatePhone(phone: string) {
    const cleanedPhone = phone.replace(/[\s()-]/g, '');

    const ddd = cleanedPhone.substring(0, 2);

    if (!this.validDDDs.includes(ddd)) {
      throw new BadRequestException('DDD do telefone inválido');
    }

    if (!(cleanedPhone.length === 11 && cleanedPhone[2] === '9')) {
      throw new BadRequestException('Telefone inválido');
    }
  }

  private async validateBirthDate(birth_date: Date) {
    const birthDate = new Date(birth_date);
    const today = new Date();

    const age = today.getFullYear() - birthDate.getFullYear();
    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    const realAge = hasHadBirthdayThisYear ? age : age - 1;

    if (realAge > 120) throw new BadRequestException('O ator não pode ter mais que 120 anos');
  }
}