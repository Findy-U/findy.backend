<p align="center">
  <img src="https://user-images.githubusercontent.com/42968718/221377086-f6a956a1-61a1-4cd6-a52e-3aae7c5dab09.jpg" width="200" alt="Nest Logo" />
</p>

## Descrição

API responsável por prover os dados que serão consumidos pela aplicação front-end da Findy.

## Intrução para rodar localmente:

- O back-end da aplicação utiliza o banco de dados MySQL. É essencial que você tenha em sua máquina o MySQL instalado ou tenha um container (Docker) com a instância do MySQL configurado, ou ainda um banco de dados MySQL em nuvem configurado. Dentro da pasta `findy.backend` existe um arquivo `.env.example` que deve ser renomeado para `.env` e na variável de nome "DATABASE_URL" deve ser inserido o endereço (URL) do banco, seja local ou na nuvem.
- Ex. de URL local: "mysql://root:12345678@localhost:3306/findy_db"

  - root => trata-se do usuário, nesse caso, o usuário é o "root", usuário raiz do MySQL. Se você não criou um usuário, provavelmente é o root que está configurado.
  - 12345678 => senha do banco. Use a senha que você registrou para o banco.
  - localhost => IP de acesso. Localmente, esse é o IP padrão que se usa.
  - 3306 => porta; Se não mapear outra porta, essa é a padrão.
  - findy_db => nome do banco. É bom manter esse nome mesmo.

- Para facilitar, existe um "Docker compose criado dentro do diretório do back-end" que cria o container (Docker) do MySQL com as configurações padrão, que a URL de exemplo utiliza.

- Para rodar o compose:

```bash
npm run compose:up
```

- Para parar o compose:

```bash
npm run compose:down
```

- Clone o repositório, entre na pasta do projeto `findy.backend`.
- Depois de clonar o repositório, você precisa das variáveis de ambientes que configuram vários acessos da aplicação. Seguem abaixo as orientações:
- Você deve acessar a documentação de como configurar as variáveis de ambientes que o projeto utiliza neste <a href="https://github.com/orgs/Findy-U/projects/1/views/1">link Doc</a>, na coluna "Orientações para Equipes" e o card "Deploy / Development / QA".

```bash
$ npm install
```

```bash
# development
$ npx prisma generate
```

```bash
# development
$ npx prisma migrate dev --name init
```

```bash
# development
$ npm run dev:seed
```

## Running the app

````bash
# development
$ npm run start

# watch mode - development
$ npm run start:dev

## Documentação da API (Swagger)

```bash
# development: Para visualizar a documentação da API em desenvolvimento utilize:

$ http://localhost:3001/api
````

Se ainda não ficou muito claro segue um link onde encontra o guia com mais detalhes:

[Notion](https://grove-lighter-c1f.notion.site/Deploy-Development-QA-9a28fbe0559e4181afb56d4ed36fd0ef)

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Manter contato

- Autores -
<table>
     <tr>
       <td align="center">
         <a href="https://github.com/ioott"
           ><img
             style="border-radius: 50%"
             src="https://avatars.githubusercontent.com/u/98191041?v=4"
             width="100px;"
             alt="Avatar Vania"
           /><br /><sub><b>Vania Ioott</b></sub></a
         >
       </td>
       <td align="center">
         <a href="https://github.com/rafaelsantosmg"
           ><img
             style="border-radius: 50%"
             src="https://avatars.githubusercontent.com/u/68519691?v=4"
             width="100px;"
             alt="Avatar Wilson"
           /><br /><sub><b>Rafael Santos</b></sub></a
         >
       </td>
       <td align="center">
         <a href="https://www.github.com/DJehSantana" target="_blank"
           ><img
             style="border-radius: 50%"
             src="https://avatars.githubusercontent.com/u/105378159?v=4"
             width="100px;"
             alt="Avatar Jessica"
           /><br /><sub><b>Jéssica Santana</b></sub></a
         >
       </td>    
     </tr>
     <tr>
       <td align="center">
         <a href="https://github.com/eemr3"
           ><img
             style="border-radius: 50%"
             src="https://avatars.githubusercontent.com/u/42968718?v=4"
             width="100px;"
             alt="Avatar Emerson"
           /><br /><sub><b>Emerson Moreira</b></sub></a
         >
       </td>
     </tr>
   </table>

## License

Findy licenciado pelo [MIT](LICENSE).
