import { PlayEntity } from "src/play/play.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'theater' })
export class TheaterEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: false })
  phone: string;

  @Column({ nullable: false })
  email: string;

  @Column({ type: 'timestamp', nullable: true })
  foundation: Date;

  @Column({ nullable: false })
  address: string;

  @Column({ nullable: false })
  capacity: number;

  @Column({ nullable: true })
  website: string;

  @OneToMany(() => PlayEntity, (play) => play.theater, { nullable: true })
  play: PlayEntity[];
}