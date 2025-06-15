import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1749948838983 implements MigrationInterface {
  name = 'CreateTables1749948838983'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "actor" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "image" character varying, "phone" character varying NOT NULL, "email" character varying NOT NULL, "birth_date" TIMESTAMP, "gender" character varying NOT NULL, "biography" character varying NOT NULL, CONSTRAINT "PK_05b325494fcc996a44ae6928e5e" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "director" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "specialty" character varying NOT NULL, "experience" character varying NOT NULL, "image" character varying, "phone" character varying NOT NULL, "email" character varying NOT NULL, "birth_date" TIMESTAMP, "gender" character varying NOT NULL, "biography" character varying NOT NULL, CONSTRAINT "PK_b85b179882f31c43324ef124fea" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "play" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "image" character varying, "synopsis" character varying, "gender" character varying NOT NULL, "address" character varying NOT NULL, "director_id" uuid, "theater_id" uuid, CONSTRAINT "PK_78bc0ac5050cc1068217341a73e" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "theater" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "image" character varying, "phone" character varying NOT NULL, "email" character varying NOT NULL, "foundation" TIMESTAMP, "address" character varying NOT NULL, "capacity" integer NOT NULL, "website" character varying, CONSTRAINT "PK_c70874202894cfb1575a5b2b743" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "actor_play" ("actor_id" uuid NOT NULL, "play_id" uuid NOT NULL, CONSTRAINT "PK_73491f8687b035cf58f51dc6f05" PRIMARY KEY ("actor_id", "play_id"))`);
    await queryRunner.query(`CREATE INDEX "IDX_b111c3f2df441ee66fc98ce145" ON "actor_play" ("actor_id") `);
    await queryRunner.query(`CREATE INDEX "IDX_a7395ef07831b572fba4c33675" ON "actor_play" ("play_id") `);
    await queryRunner.query(`ALTER TABLE "play" ADD CONSTRAINT "FK_69c1976765556baa87d2306d248" FOREIGN KEY ("director_id") REFERENCES "director"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "play" ADD CONSTRAINT "FK_d2cd035667e4cd3c77afbb89b56" FOREIGN KEY ("theater_id") REFERENCES "theater"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "actor_play" ADD CONSTRAINT "FK_b111c3f2df441ee66fc98ce145c" FOREIGN KEY ("actor_id") REFERENCES "actor"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    await queryRunner.query(`ALTER TABLE "actor_play" ADD CONSTRAINT "FK_a7395ef07831b572fba4c33675c" FOREIGN KEY ("play_id") REFERENCES "play"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "actor_play" DROP CONSTRAINT "FK_a7395ef07831b572fba4c33675c"`);
    await queryRunner.query(`ALTER TABLE "actor_play" DROP CONSTRAINT "FK_b111c3f2df441ee66fc98ce145c"`);
    await queryRunner.query(`ALTER TABLE "play" DROP CONSTRAINT "FK_d2cd035667e4cd3c77afbb89b56"`);
    await queryRunner.query(`ALTER TABLE "play" DROP CONSTRAINT "FK_69c1976765556baa87d2306d248"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_a7395ef07831b572fba4c33675"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_b111c3f2df441ee66fc98ce145"`);
    await queryRunner.query(`DROP TABLE "actor_play"`);
    await queryRunner.query(`DROP TABLE "theater"`);
    await queryRunner.query(`DROP TABLE "play"`);
    await queryRunner.query(`DROP TABLE "director"`);
    await queryRunner.query(`DROP TABLE "actor"`);
  }

}
