# CASE ANALISTA DE DESENVOLVIMENTO SR.
Desenvolvimento de API responsável pela intermediação entre servidores.

## Visão do projeto
Antes de iniciar o desenvolvimento da aplicação foi necessário buscar entender o propósito, as dificuldades e ações que podem ser tomadas para garantir a boa eficiência da aplicação.

Por não conter informações relacionadas ao tamanho de arquivo que a api estaria lidando, a api foi desenvolvida de uma forma que atendesse a demanda que fosse necessária juntamente a possibilidade de mudanças para garantir o bom funcionamento, visando a flexibilidade.

Com isso foi preciso entender o fluxo da aplicação para alinhar qual tipo de trabalho seria realizado.
![image](https://github.com/AyrtonYamashita/api-remote-vivo/assets/90657726/4c798b9c-e66f-4b36-b325-470971669285)
Acima possui um fluxograma representando as etapas do processo na visão de negócios da operação, tendo em vista que o foco seria em realizar a conexão entre o servidor de produção e servidor de envio, efetivando a intermediação dos processos.


## Tecnologias utilizadas

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://nodejs.org/static/logos/nodejsLight.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://nodejs.org/static/logos/nodejsDark.svg">
  <img alt="NodeJS" width="200">
</picture>

A base do projeto foi pensada em NodeJS por ser uma ferramenta baseada em JavaScript ter uma grande escalabilidade e performance para aplicações web.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg">
  <img alt="ExpressJS" width="200">
</picture>

Para lidar com a api e gerenciar o endpoint responsável pela intermediação foi utilizado o framework ExpressJS por fornecer uma série de recursos para aplicações web além da sua flexibilidade.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://miro.medium.com/v2/resize:fit:1400/0*s0PAp_h5WHn1hQEm.png">
  <source media="(prefers-color-scheme: light)" srcset="https://miro.medium.com/v2/resize:fit:1400/0*s0PAp_h5WHn1hQEm.png">
  <img alt="ExpressJS" width="200">
</picture>

Multer é um middleware do nodeJS, com ele é possível fazer o upload de arquivos para a API com maior eficiência por meio dos chunks. Com isso ele cria um formData utilizado para enviar ao servidor de envio por meio do node-fetch.

## Segurança das informações
> [!WARNING]
> Com o propósito de preservar a integridade e segurança das informações, os dados fornecidos para o case foram tratados com variáveis de ambiente, portanto é necessário criar o arquivo .env e informar os valores de:
>- API_KEY
>- HOSTNAME_API
>- ENDPOINT_API

## Estrutura de arquivos
### index.js
No arquivo [index.js](index.js) é responsável por iniciar a API importando o express, multer e a classe Storage2API do arquivo handle-file.js.

Aqui também é definido a porta, endpoint e uma pagina simples na rota '/' para receber o arquivo.

Em seguida é criado um novo Objeto de Storage2API contendo as informações de envio para o multer.

Por fim define-se a rota '/' com o método POST, setando o envio de apenas um arquivo por vez.

### handle-file.js
Em [handle-file.js](handle-file.js) é a parte responsável por tratar a integridade do arquivo e enviar para o endpoint definido. Com isso inicia um método assíncrono chamado _handleFile que é responsável por lidar com o envio de arquivos para o servidor.

Nessa parte o multer faz a desestruturação do arquivo para um fluxo de dados legível que também é conhecido como chunk.

Com isso é definido a preparação dos dados para enviar as informações com integridade e segurança, isso é feito criando um objeto formData.

Em seguida é definido as opções de requst como o método POST, no header a chave da API e seu hostname e o formData no body da requisição.

Por fim é feita uma tratativa de erro para lidar com o envio dos chunks utilizando a função fetch, nisso se espera a resposta da requisição que se caso bem sucedida chama o callback contendo nulo e os dados recebidos, caso de erro ele é tratado pelo catch e passado ao callback.

### package.json
O package.json é o arquivo padrão da estrutura de um projeto node onde contém as informações do projeto como nome, versão, autor etc.

Aqui é aonde será definido as dependências do projeto.

Por fim também é definido um script de execução do projeto chamado "start" quando instanciado no terminado, executa a aplicação.


## Referências

- node: [https://nodejs.org/en]
- multer: [https://www.npmjs.com/package/multer]
- express: [https://expressjs.com/pt-br/]
