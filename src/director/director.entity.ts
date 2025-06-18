import { PlayEntity } from "src/play/play.entity";
import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'director' })
export class DirectorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  specialty: string;

  @Column({ nullable: false })
  experience: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: false })
  phone: string;

  @Column({ nullable: false })
  email: string;

  @Column({ type: 'timestamp', nullable: true })
  birth_date: Date;

  @Column({ nullable: false })
  gender: string;

  @Column({ nullable: false })
  biography: string;

  @OneToMany(() => PlayEntity, (play) => play.director, { nullable: true })
  play: PlayEntity[];
}