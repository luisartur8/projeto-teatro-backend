import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export class TheaterDto {
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

  @IsString({ message: 'O campo phone deve ser do tipo string' })
  @IsNotEmpty({ message: 'O campo phone é obrigatório' })
  @MinLength(11, { message: 'O campo phone deve ter no mínimo 11 caracteres' })
  @MaxLength(15, { message: 'O campo phone deve ter no máximo 15 caracteres' })
  phone: string;

  @IsEmail({}, { message: 'O campo email deve ser um email válido' })
  @IsNotEmpty({ message: 'O campo email é obrigatório' })
  @MaxLength(255, { message: 'O campo email deve ter no máximo 255 caracteres' })
  email: string;

  @IsOptional()
  @IsDateString({}, { message: 'O campo foundation deve ser uma data válida' })
  foundation: Date;

  @IsString({ message: 'O campo address deve ser do tipo string' })
  @IsNotEmpty({ message: 'O campo address é obrigatório' })
  address: string;

  @IsNumber({}, { message: 'O campo capacity deve ser do tipo number' })
  @IsNotEmpty({ message: 'O campo capacity é obrigatório' })
  capacity: number;

  @IsOptional()
  @IsUrl({}, { message: 'O campo website deve ser uma URL válida' })
  website: string;
}
