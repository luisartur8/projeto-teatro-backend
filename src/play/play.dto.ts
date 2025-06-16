import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export class PlayDto {
  @IsUUID('4', { message: 'O campo id deve ser um UUID' })
  @IsOptional()
  id: string;

  @IsString({ message: 'O campo name deve ser do tipo string' })
  @IsNotEmpty({ message: 'O campo name é obrigatório' })
  @MinLength(4, { message: 'O campo name deve ter no mínimo 4 caracteres' })
  @MaxLength(100, { message: 'O campo name deve ter no máximo 100 caracteres' })
  name: string;

  @IsOptional()
  @IsUrl({}, { message: 'O campo image deve ser uma URL válida' })
  image: string;

  @IsOptional()
  @IsString({ message: 'O campo synopsis deve ser do tipo string' })
  @MinLength(100, { message: 'O campo synopsis deve ter no mínimo 100 caracteres' })
  @MaxLength(255, { message: 'O campo synopsis deve ter no máximo 255 caracteres' })
  synopsis: string;

  @IsString({ message: 'O campo gender deve ser do tipo string' })
  @IsNotEmpty({ message: 'O campo gender é obrigatório' })
  @MinLength(4, { message: 'O campo gender deve ter no mínimo 4 caracteres' })
  @MaxLength(20, { message: 'O campo gender deve ter no máximo 20 caracteres' })
  gender: string;

  @IsString({ message: 'O campo address deve ser do tipo string' })
  @IsNotEmpty({ message: 'O campo address é obrigatório' })
  address: string;

  @IsUUID('4', { message: 'O campo actorId deve ser um UUID', each: true })
  @IsOptional()
  actorId: string[];

  @IsUUID('4', { message: 'O campo directorId deve ser um UUID' })
  @IsNotEmpty({ message: 'O campo directorId é obrigatório' })
  directorId: string;

  @IsUUID('4', { message: 'O campo theaterId deve ser um UUID' })
  @IsNotEmpty({ message: 'O campo theaterId é obrigatório' })
  theaterId: string;
}
