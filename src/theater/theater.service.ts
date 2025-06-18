import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TheaterDto } from "./theater.dto";
import { Repository } from "typeorm";
import { TheaterEntity } from "./theater.entity";
import { PlayEntity } from "src/play/play.entity";

@Injectable()
export class TheaterService {
  constructor(
    @InjectRepository(TheaterEntity)
    private readonly theaterRepository: Repository<TheaterEntity>,
    @InjectRepository(PlayEntity)
    private readonly playRepository: Repository<PlayEntity>,
  ) { }

  async findPaginated(page: number, limit: number, order: 'asc' | 'desc') {
    const skip = (page - 1) * limit;

    return this.theaterRepository.find({
      skip,
      take: limit,
      order: { name: order.toUpperCase() as 'ASC' | 'DESC' }
    });
  }

  findAll() {
    return this.theaterRepository.find({
      relations: {
        play: {
          director: true,
          actor: true
        }
      }
    });
  }

  async findById(id: string) {
    const theater = await this.theaterRepository.findOne({
      where: { id },
      relations: {
        play: {
          director: true,
          actor: true
        }
      }
    });
    if (!theater) throw new NotFoundException('Teatro não encontrado');
    return theater;
  }

  async create(theaterDto: TheaterDto) {
    await this.validateBusinessRules(theaterDto);
    const actor = await this.findById(theaterDto.id);
    if (actor && theaterDto.id) {
      throw new BadRequestException("Teatro já existe")
    }
    const theaterEntity = this.theaterRepository.create(theaterDto);
    return this.theaterRepository.save(theaterEntity);
  }

  async update(id: string, theaterDto: TheaterDto) {
    await this.validateBusinessRules(theaterDto);
    const theater = await this.findById(id);
    Object.assign(theater, theaterDto);
    return this.theaterRepository.save(theater);
  }

  async remove(id: string) {
    const theater = await this.theaterRepository.findOne({
      where: { id },
      relations: ['play'],
    });

    if (!theater) {
      throw new NotFoundException('Teatro não encontrado');
    }

    const plays = await this.playRepository.find({
      where: { theater: { id } },
    });

    for (const play of plays) {
      play.theater = null;
      await this.playRepository.save(play);
    }

    await this.theaterRepository.remove(theater);
    return { ...theater, id };
  }

  private async validateBusinessRules(theaterDto: TheaterDto) {
    const { foundation, address, capacity } = theaterDto;
    await this.validateFoundation(foundation); // Entre 1800 e hoje
    await this.validateAdress(address); // Ter certas palavras chave
    await this.validateCapacity(capacity); // Estar entre 0 e 100.000
  }

  private async validateFoundation(foundation: Date) {
    const data = new Date(foundation);
    const ano = data.getFullYear();
    const anoAtual = new Date().getFullYear();
    if (ano < 1800 || ano > anoAtual) throw new BadRequestException("O teatro tem que ser fundado entre 1800 e hoje");
  }

  private async validateAdress(address: string) {
    const palavrasChave = [
      "rua", "avenida", "travessa", "estrada", "alameda", "viela",
      "largo", "praça", "rodovia", "boulevard", "beco"
    ];

    const regex = new RegExp(`\\b(${palavrasChave.join("|")})\\b`, "i");

    if (!regex.test(address)) {
      throw new BadRequestException(
        `O teatro tem que ter um endereço válido que contenha pelo menos uma destas palavras: ${palavrasChave.join(", ")}`
      );
    }
  }

  private async validateCapacity(capacity: number) {
    if (capacity > 100000 || capacity <= 0) throw new BadRequestException('A capacidade tem que estar em um intervalo de 0 a 100.000');
  }
}
