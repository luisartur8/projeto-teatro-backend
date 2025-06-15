import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertDados1749948897227 implements MigrationInterface {

  public up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.query(`
      INSERT INTO theater (id, name, image, phone, email, foundation, address, capacity, website) VALUES
      ('00000000-0000-0000-0000-000000000001', 'Teatro Municipal', NULL, '11911111111', 'municipal@teatro.com', '1980-01-01', 'Rua A, 123', 500, 'https://municipal.com'),
      ('00000000-0000-0000-0000-000000000002', 'Teatro Popular', NULL, '11922222222', 'popular@teatro.com', '1990-02-02', 'Rua B, 456', 400, 'https://popular.com'),
      ('00000000-0000-0000-0000-000000000003', 'Teatro Moderno', NULL, '11933333333', 'moderno@teatro.com', '2000-03-03', 'Rua C, 789', 600, 'https://moderno.com'),
      ('00000000-0000-0000-0000-000000000004', 'Teatro Antigo', NULL, '11944444444', 'antigo@teatro.com', '1970-04-04', 'Rua D, 101', 700, 'https://antigo.com'),
      ('00000000-0000-0000-0000-000000000005', 'Teatro Central', NULL, '11955555555', 'central@teatro.com', '2010-05-05', 'Rua E, 202', 550, 'https://central.com');

      INSERT INTO director (id, name, specialty, experience, image, phone, email, birth_date, gender, biography) VALUES
      ('11111111-1111-1111-1111-111111111111', 'João Silva', 'Drama', '15 anos', NULL, '11911112222', 'joao@diretores.com', '1970-01-01', 'masculino', 'Especialista em drama.'),
      ('11111111-1111-1111-1111-111111111112', 'Maria Souza', 'Comédia', '10 anos', NULL, '11922223333', 'maria@diretores.com', '1980-02-02', 'feminino', 'Diretora premiada.'),
      ('11111111-1111-1111-1111-111111111113', 'Carlos Lima', 'Musical', '20 anos', NULL, '11933334444', 'carlos@diretores.com', '1975-03-03', 'masculino', 'Musicais e óperas.'),
      ('11111111-1111-1111-1111-111111111114', 'Ana Paula', 'Infantil', '12 anos', NULL, '11944445555', 'ana@diretores.com', '1985-04-04', 'feminino', 'Peças infantis criativas.'),
      ('11111111-1111-1111-1111-111111111115', 'Ricardo Melo', 'Terror', '18 anos', NULL, '11955556666', 'ricardo@diretores.com', '1965-05-05', 'masculino', 'Clássico do terror teatral.');

      INSERT INTO actor (id, name, image, phone, email, birth_date, gender, biography) VALUES
      ('22222222-2222-2222-2222-222222222221', 'Beatriz Costa', NULL, '11911113333', 'beatriz@atores.com', '1990-01-01', 'feminino', 'Atriz principal de drama.'),
      ('22222222-2222-2222-2222-222222222222', 'Lucas Prado', NULL, '11922224444', 'lucas@atores.com', '1988-02-02', 'masculino', 'Versátil em papéis cômicos.'),
      ('22222222-2222-2222-2222-222222222223', 'Fernanda Rocha', NULL, '11933335555', 'fernanda@atores.com', '1995-03-03', 'feminino', 'Atriz revelação.'),
      ('22222222-2222-2222-2222-222222222224', 'Marcos Alves', NULL, '11944446666', 'marcos@atores.com', '1982-04-04', 'masculino', 'Veterano de palco.'),
      ('22222222-2222-2222-2222-222222222225', 'Paula Mendes', NULL, '11955557777', 'paula@atores.com', '1993-05-05', 'feminino', 'Experiente em musicais.');

      INSERT INTO play (id, name, image, synopsis, gender, address, director_id, theater_id) VALUES
      ('33333333-3333-3333-3333-333333333331', 'A Tragédia dos Sonhos', NULL, 'Peça dramática e profunda.', 'Drama', 'Rua A, 123', '11111111-1111-1111-1111-111111111111', '00000000-0000-0000-0000-000000000001'),
      ('33333333-3333-3333-3333-333333333332', 'Rindo à Toa', NULL, 'Comédia com final inesperado.', 'Comédia', 'Rua B, 456', '11111111-1111-1111-1111-111111111112', '00000000-0000-0000-0000-000000000002'),
      ('33333333-3333-3333-3333-333333333333', 'O Show da Vida', NULL, 'Musical encantador.', 'Musical', 'Rua C, 789', '11111111-1111-1111-1111-111111111113', '00000000-0000-0000-0000-000000000003'),
      ('33333333-3333-3333-3333-333333333334', 'O Mistério do Cofre', NULL, 'Terror psicológico no palco.', 'Terror', 'Rua D, 101', '11111111-1111-1111-1111-111111111115', '00000000-0000-0000-0000-000000000004'),
      ('33333333-3333-3333-3333-333333333335', 'Contos de Fadas Urbanos', NULL, 'Infantil e educativo.', 'Infantil', 'Rua E, 202', '11111111-1111-1111-1111-111111111114', '00000000-0000-0000-0000-000000000005');

      INSERT INTO actor_play (actor_id, play_id) VALUES
      ('22222222-2222-2222-2222-222222222221', '33333333-3333-3333-3333-333333333331'),
      ('22222222-2222-2222-2222-222222222222', '33333333-3333-3333-3333-333333333331'),

      ('22222222-2222-2222-2222-222222222223', '33333333-3333-3333-3333-333333333332'),
      ('22222222-2222-2222-2222-222222222224', '33333333-3333-3333-3333-333333333332'),

      ('22222222-2222-2222-2222-222222222225', '33333333-3333-3333-3333-333333333333'),

      ('22222222-2222-2222-2222-222222222221', '33333333-3333-3333-3333-333333333334'),
      ('22222222-2222-2222-2222-222222222222', '33333333-3333-3333-3333-333333333335');
      `);
  }

  public down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.query(`
      DELETE FROM actor_play;
      DELETE FROM play;
      DELETE FROM actor;
      DELETE FROM director;
      DELETE FROM theater;
  `);
  }

}
