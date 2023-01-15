<table align="center"><tr><td align="center" width="9999">
<img src="https://img.freepik.com/premium-photo/3d-rendering-3d-illustration-red-heart-beat-monitor-pulse-line-icon-white-background-medical-icon-medical-apps-websites_640106-13.jpg?w=2000" align="center" width="250px" alt="Project icon">

<h4>API Heart Beat Monitor</h4>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/lrocha09/heart-beat-monitor-api?color=E02041">

  <a href="https://github.com/lrocha09" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Lucas%20Rocha-E02041">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/lrocha09/heart-beat-monitor-api?color=E02041">

  <a href="https://github.com/lrocha09/heart-beat-monitor-api/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/lrocha09/heart-beat-monitor-api?color=E02041">
  </a>

  <a href="https://github.com/lrocha09/heart-beat-monitor-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/lrocha09/heart-beat-monitor-api?color=E02041">
  </a>

</p>

<p align="center">
  <a href="#descrição-do-projeto">Descrição do Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#executando-o-projeto">Executando o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#documentação-da-api">Documentação da API</a>&nbsp;&nbsp;&nbsp;
</p>

</td></tr>
</table>

## Descrição do Projeto

O projeto tem como objetivo o desenvolvimento de uma API para simular um monitor de batimentos cardíacos em tempo real, enviando atualizações contínuas de sinais. A API permite que qualquer dispositivo se conecte e receba periodicamente as coordenadas X e Y, podendo representar graficamente as alterações dos sinais de batimento cardíaco de um usuário. 

## Tecnologias

Tecnologias utilizadas para o desenvolvimeno da API:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [Socket.io](https://socket.io/pt-br/)
- [Npm](https://www.npmjs.com/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)

## Executando o Projeto

### Requisitos Necessários

- [Node.js](https://nodejs.org/en/) (Foi utilizada a versão 18.12.1 durante o desenvolvimento)
- [Npm](https://www.npmjs.com/) ou [Yarn](https://classic.yarnpkg.com/)


**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/lrocha09/heart-beat-monitor-api.git && cd heart-beat-monitor-api
```

**Siga os passos abaixo**

```bash
# Instale todas as dependências necessárias:
$ npm install

# Para iniciar o servidor da API:
$ npm run start

# Caso queira iniciar o servidor da API em modo assistido:
$ npm run start:dev

# Para iniciar o servidor da API em produção:
$ npm run start:prod

# Após isso, o projeto pode ser inicializado e os endpoints estarão prontos para ser utilizados!
```

**Comandos para executar testes**

```bash
# Para executar todos os testes unitários:
$ npm run test

# Para executar todos os testes e2e:
$ npm run test:e2e

# Para executar um teste específico do projeto:
$ npm run test:e2e "nome do arquivo"

# Para executar todos os testes coverage:
$ npm run test:cov
```

### Documentação da API

- Realizamos inicialmente uma conexão bi-direcional com o servidor.
- Logo após emitimos uma mensagem para o servidor, requisitando o inicio do monitoramento.
- O servidor enviará em tempo real os dados atualizados para o cliente.

```bash
# Após a conexão com o servidor monitoramos o evento "start-monitor", para isso enviaremos uma menssagem para esse tópico, seguindo o seguinte escopo:
{
  "frameRate": 24,   // Quantidade de frames que serão recebidos por segundos
  "readingTime": 10  // Quantidade de tempo que iremos monitorar em segundos
}

# O servidor enviará em tempo real as coordenadas de cada sinal emitido, seguindo este padrão de menssagem:
{ 
 "x": 4034,     // Tempo da leitura em millisegundos
 "y": "0.18758" // Valor do sinal naquele instante
}
```

