<p align="center">
  <img src="https://user-images.githubusercontent.com/42968718/221377086-f6a956a1-61a1-4cd6-a52e-3aae7c5dab09.jpg" width="200" alt="Nest Logo" />
</p>

## Descrição

API responsável por prover os dados que serão consumidos pela aplicação fornt-end da Findy.

## Instalação

- Clone o repositŕoio, entre na pasta do projeto `findy.backend`

```bash
$ npm install
```

```bash
# production
$ npm run prod:prisma
```

```bash
# production
$ npm run prod:seed
```

```bash
# development
$ npx prisma generate
```

```bash
# development
$ npx prisma migrate dev
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
         <a href="https://github.com/MarioLucas0"
           ><img
             style="border-radius: 50%"
             src="https://avatars.githubusercontent.com/u/100689099?v=4"
             width="100px;"
             alt="Avatar Mario"
           /><br /><sub><b>Mario Lucas</b></sub></a
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
