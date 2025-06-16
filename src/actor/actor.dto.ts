import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export class ActorDto {
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
  @IsDateString({}, { message: 'O campo birth_date deve ser uma data válida' })
  birth_date: Date;

  @IsString({ message: 'O campo gender deve ser do tipo string' })
  @IsNotEmpty({ message: 'O campo gender é obrigatório' })
  @MinLength(1, { message: 'O campo gender deve ter 1 caracter' })
  @MaxLength(1, { message: 'O campo gender deve ter 1 caracter' })
  gender: string;

  @IsString({ message: 'O campo biography deve ser do tipo string' })
  @IsNotEmpty({ message: 'O campo biography é obrigatório' })
  biography: string;
}
