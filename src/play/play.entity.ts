import { ActorEntity } from "src/actor/actor.entity";
import { DirectorEntity } from "src/director/director.entity";
import { TheaterEntity } from "src/theater/theater.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'play' })
export class PlayEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  synopsis: string;

  @Column({ nullable: false })
  gender: string;

  @Column({ nullable: false })
  address: string;

  @ManyToMany(() => ActorEntity, (actor) => actor.play)
  actor: ActorEntity[];

  @ManyToOne(() => DirectorEntity, (director) => director.play)
  @JoinColumn({ name: 'director_id' })
  director: DirectorEntity;

  @ManyToOne(() => TheaterEntity, (theater) => theater.play)
  @JoinColumn({ name: 'theater_id' })
  theater: TheaterEntity;
}