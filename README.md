# spacex-ui

Esta interface consome a API desenvolvida no repo [spacex-api](https://github.com/thcerutti/spacex-api), que tem como objetivo buscar dados sobre os lançamentos de foguete que ocorreram pela SpaceX.

O projeto foi desenvolvido em Vue.js 2, e para rodá-lo é necessário seguir os seguintes passos:

## Instalando as dependências do projeto
```
npm install
```

### Rodando o servidor de aplicação para desenvolvimento
```
npm run serve
```

### Compilando o código para produção
```
npm run build
```

Foi utilizado VueRouter para separar as responsabilidades das páginas, e cada página tem seu próprio componente. 

Centralizei a responsabilidade de requisições em um serviço, abstraindo o `axios` do restante da implementação.

O projeto de front-end está publicado na minha conta Azure como um `Static Web App` [neste endereço](https://green-dune-0effe7210.1.azurestaticapps.net) e o deploy está vinculado à novos commits na branch `main` deste repo.