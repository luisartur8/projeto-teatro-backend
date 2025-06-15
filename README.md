# projeto-teatro-backend
Trabalho da disciplina Tópicos Especiais - backend

## Pré-requisito
Instalar globalmente
```bash
npm install -g @nestjs/cli
```

## Passos:
- Configurar o banco em db/data-source.ts
- Criar um banco com o nome "theater"

## Banco de dados
- Criar tabelas no banco
```bash
npm run typeorm:run
```
- Popular tabelas com dados
```bash
npm run typeorm-seed:run
```

## Rodar o projeto
```bash
npm run start:dev
```