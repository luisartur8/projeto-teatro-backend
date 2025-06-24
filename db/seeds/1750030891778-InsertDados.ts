import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertDados1750030891778 implements MigrationInterface {

  public up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.query(`
			INSERT INTO theater (id, name, image, phone, email, foundation, address, capacity, website) VALUES
			('3895404f-b0c7-48b9-86e9-51bae89f2149', 'Teatro Municipal', 'https://lets.events/blog/wp-content/uploads/2023/06/Imersao-Cultural.jpg', '11911111111', 'municipal@teatro.com', '1980-01-01', 'Rua A, 123', 500, 'https://municipal.com'),
			('31d35292-4881-49a5-a9d5-f69ae33d5421', 'Teatro Popular', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4bQJe4BCnjF8LGvBIFHU8LROKo0pwTyVfw&s', '11922222222', 'popular@teatro.com', '1990-02-02', 'Rua B, 456', 400, 'https://popular.com'),
			('0564d5e1-62fd-4d39-bb58-4768890b8d4d', 'Teatro Moderno', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFh-yWPjD0HNwh6fCZbpVZ46K5Xtf06Fl4ag&s', '11933333333', 'moderno@teatro.com', '2000-03-03', 'Rua C, 789', 600, 'https://moderno.com'),
			('40403325-96c0-4f1b-87c3-78f8b2b179e0', 'Teatro Antigo', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSJRr1J_mEa4DrxvloeOnAtlrVX3yn9L8hjg&s', '11944444444', 'antigo@teatro.com', '1970-04-04', 'Rua D, 101', 700, 'https://antigo.com'),
			('3265976c-9e52-4a53-ab64-ae03b16431e5', 'Teatro Central', NULL, '11955555555', 'central@teatro.com', '2010-05-05', 'Rua E, 202', 550, 'https://central.com');

			INSERT INTO director (id, name, specialty, experience, image, phone, email, birth_date, gender, biography) VALUES
			('6732084d-528f-42d2-8679-5e797023a26b', 'João Silva', 'Drama', '15 anos', 'https://images.ctfassets.net/pdf29us7flmy/2FLVP3ciJVOuLJD4XlxcmR/ed70c4d3077d1ecc90f29fa3800a4938/Resume_thinking_-_web_optimized.jpg?w=720&q=100&fm=jpg', '11911112222', 'joao@diretores.com', '1970-01-01', 'M', 'Especialista em drama.'),
			('35eeef78-57ba-4746-93cb-1605d1dd3c77', 'Maria Souza', 'Comédia', '10 anos', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3yOCwWrVQhICsvW_eqV5f8PgajcYWAiPNw&s', '11922223333', 'maria@diretores.com', '1980-02-02', 'F', 'Diretora premiada.'),
			('6315ef9c-d9a6-4ddb-a69a-3b2c46c180fc', 'Carlos Lima', 'Musical', '20 anos', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcNdEFR29DXre9LTLKm6c4tVsc8hODLXlYg&s', '11933334444', 'carlos@diretores.com', '1975-03-03', 'M', 'Musicais e óperas.'),
			('efe62c9b-1af4-4459-b1d5-31d99c784f4f', 'Ana Paula', 'Infantil', '12 anos', 'https://www.betterup.com/hubfs/two-people-sitting-at-a-table-practicing-career-aspirations-examples.jpg', '11944445555', 'ana@diretores.com', '1985-04-04', 'F', 'Peças infantis criativas.'),
			('ce5ce250-9fdc-4bac-bdb9-142087b2e57c', 'Ricardo Melo', 'Terror', '18 anos', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEwuq64VzUpE5NIqGSUXnJT4vRWodiUB0XUA&s', '11955556666', 'ricardo@diretores.com', '1965-05-05', 'M', 'Clássico do terror teatral.');

			INSERT INTO actor (id, name, image, phone, email, birth_date, gender, biography) VALUES
			('a39c107d-7ecb-44d9-8525-6f96b0106b1d', 'Beatriz Costa', 'https://portraitpal.ai/wp-content/uploads/2024/11/professional-man-smiling-scaled.jpg', '11911113333', 'beatriz@atores.com', '1990-01-01', 'F', 'Atriz principal de drama.'),
			('d10290dc-ad81-4433-b801-1a5b367dff46', 'Lucas Prado', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlSc5seYhr7FyM6KZBpaStLs7o3ET1PFqETQ&s', '11922224444', 'lucas@atores.com', '1988-02-02', 'M', 'Versátil em papéis cômicos.'),
			('28721283-9711-429f-a57c-5cbeaaaec65b', 'Fernanda Rocha', 'https://img.freepik.com/free-photo/portrait-father-his-backyard_23-2149489567.jpg?semt=ais_hybrid&w=740', '11933335555', 'fernanda@atores.com', '1995-03-03', 'F', 'Atriz revelação.'),
			('e7330e55-68a5-48d3-a429-38925e91c25a', 'Marcos Alves', 'https://thebluegrasssituation.com/wp-content/uploads/2020/08/re-perez-branding-for-the-people-square-headshot.jpg', '11944446666', 'marcos@atores.com', '1982-04-04', 'M', 'Veterano de palco.'),
			('26878819-76ce-4205-a351-db9e759282d2', 'Paula Mendes', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBaPf0KVvCdehuJhkmagBS3kpSElxX4qQNLQ&s', '11955557777', 'paula@atores.com', '1993-05-05', 'F', 'Experiente em musicais.');

			INSERT INTO play (id, name, image, synopsis, gender, address, director_id, theater_id) VALUES
			('1b48785e-88cc-4e9a-9a49-0bbc417e105c', 'A Tragédia dos Sonhos', 'https://conceitos.com/wp-content/uploads/2014/07/Peca-Teatro.jpg', 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore.', 'Drama', 'Rua A, 123', '6732084d-528f-42d2-8679-5e797023a26b', '3895404f-b0c7-48b9-86e9-51bae89f2149'),
			('b270bef9-d391-459d-a9f2-afa3d65abbd5', 'Rindo à Toa', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeNwviI_ezVHLqeS6We6YMyFmSG4_Z9ttx4A&s', 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore.', 'Comédia', 'Rua B, 456', '35eeef78-57ba-4746-93cb-1605d1dd3c77', '31d35292-4881-49a5-a9d5-f69ae33d5421'),
			('9b4f0caf-946d-44d6-873c-e2687b92cda1', 'O Show da Vida', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbLeuCeiMkN1KtVnNNqrvjKqk4QqZ_RHSWzw&s', 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore.', 'Musical', 'Rua C, 789', '6315ef9c-d9a6-4ddb-a69a-3b2c46c180fc', '0564d5e1-62fd-4d39-bb58-4768890b8d4d'),
			('a41a6461-73ed-4c4c-99e8-6485403948c8', 'O Mistério do Cofre', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbwZhXXvi0WWgYwSTJ2T3xNs1driCb7mBnFQ&s', 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore.', 'Terror', 'Rua D, 101', 'efe62c9b-1af4-4459-b1d5-31d99c784f4f', '40403325-96c0-4f1b-87c3-78f8b2b179e0'),
			('89115170-68aa-4359-a7ee-346b95787e43', 'Contos de Fadas Urbanos', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Gaf5NLp1PKZ4-6woMzNE1l0jAWrQmwc0oQ&s', 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore.', 'Infantil', 'Rua E, 202', 'ce5ce250-9fdc-4bac-bdb9-142087b2e57c', '3265976c-9e52-4a53-ab64-ae03b16431e5');

			INSERT INTO actor_play (actor_id, play_id) VALUES
			('a39c107d-7ecb-44d9-8525-6f96b0106b1d', '1b48785e-88cc-4e9a-9a49-0bbc417e105c'),
			('26878819-76ce-4205-a351-db9e759282d2', '1b48785e-88cc-4e9a-9a49-0bbc417e105c'),

			('28721283-9711-429f-a57c-5cbeaaaec65b', 'b270bef9-d391-459d-a9f2-afa3d65abbd5'),
			('e7330e55-68a5-48d3-a429-38925e91c25a', 'b270bef9-d391-459d-a9f2-afa3d65abbd5'),

			('26878819-76ce-4205-a351-db9e759282d2', '9b4f0caf-946d-44d6-873c-e2687b92cda1'),

			('a39c107d-7ecb-44d9-8525-6f96b0106b1d', 'a41a6461-73ed-4c4c-99e8-6485403948c8'),
			('d10290dc-ad81-4433-b801-1a5b367dff46', '89115170-68aa-4359-a7ee-346b95787e43');
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
