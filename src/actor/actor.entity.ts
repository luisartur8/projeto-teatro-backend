import { PlayEntity } from "src/play/play.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'actor' })
export class ActorEntity {
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
  birth_date: Date;

  @Column({ nullable: false })
  gender: string;

  @Column({ nullable: false })
  biography: string;

  @ManyToMany(() => PlayEntity, (play) => play.actor, { nullable: true })
  @JoinTable({
    name: 'actor_play',
    joinColumn: { name: 'actor_id' },
    inverseJoinColumn: { name: 'play_id' },
  })
  play: PlayEntity[];
}