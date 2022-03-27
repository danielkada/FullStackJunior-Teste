# API para manipulação de usuários

Este projeto é uma API feita em NodeJS criando um servidor local com Express, banco de dados criado com Docker Compose e realizando consultas SQL com Knex.

# Instalação

Você precisará ter o [NodeJS](https://nodejs.org/en/) instalado na sua máquina e, após isso clonar este repositório.

```console
$ git clone https://github.com/danielkada/FullStackJunior-Teste.git
```

Também é necessário ter o [Docker](https://www.docker.com/get-started/) instalado na sua máquina, pois para criar o banco de dados é utilizado [Docker/Compose](https://docs.docker.com/compose/install/).

# Antes de iniciar

## Instale todas dependências

Com yarn

```console
$ yarn
```

Com npm

```console
$ npm install
```

**_Crie seu container inicializando o Docker Compose_**

```console
$ docker-compose up -d
```

Antes de executar as migrações acesse seu container para ser feita a criação do banco de dados.

```console
$ docker exec -it pg_contele bash
```

Em seguida para logar no banco de dados usamos o comando.

```console
$ psql -U contele
```

Execute as querys contidas na pasta src/database/schema.sql para criação da sua database.

##### Importante

Não se esqueça de executar também a query que cria a extensão uuid, pois é com essa função do postgres que vamos gerar o id do usuário.

**Lembre-se de selecionar seu usuário usando _\c contele_**

Por fim execute as migrações com Knex para criação da tabela de usuários.

```console
$ npx knex migrate:up
```

Caso seja apresentado o erro de que a função não exista mude a criação da coluna id nas migrations.

```console
table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'));
```

Para

```console
table.increments('id');
```

# Documentação

Para facilitar o uso da API a documentação foi feita em [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express), para acessar basta inicializar seu servidor.

```console
$ yarn start
```

ou

```console
$ npm start
```

E em seguida acessar o servidor local **http://localhost:3000/api-docs**
