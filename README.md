## Curriculum DAVI SCHOLL [em construção]

Página construída com [Next.js](https://nextjs.org/) e [React](https://reactjs.org/), que busca e exibe todos os repositórios da conta do Github em tempo real.

### Documentação passo a passo

Para criar esta apresentação, foi utilizado o Node.js com NPM, seguindo a seguinte sequência detalhada:

```
$ npm init -y
$ npm install next react react-dom
```
Setados os seguintes scripts no package.json:
```
"dev": "next",
"build": "next build",
"start": "next start"
```

Criar o diretório pages dentro da raiz do projeto e o arquivo index.js, que será a página principal. Esta página principal no Next, é um componente em React.

``
pages/index.js
``

O componente funcional Index() é uma arrow function que retorna algum elemento visual. Neste caso, estamos fazendo ele retornar uma div.

Este return deve ser colocado entre parêntesis, para que possa ser renderizado.
O componente div é um JSX.

O componente deve ser exportado com a última linha do arquivo:

``
export default Index
``

Para rodar a aplicação no ambiente dev e acessar através de localhost na porta 3000:

```
$ nmp run dev
```

Para buscar a lista de repositórios, foi utilizada a Api pública do próprio Github, neste endereço:
```
https://api.github.com/users/davischoll
https://api.github.com/users/davischoll/repos?sort=updated
```
"/repos" vai trazer a lista de repositórios.

"/repos?sort=updated" vai trazer a mesma lista de forma ordenada por data de atualização.

### Server Side Rendering (SSR)

No Next, se exportarmos uma função com o nome **getServerSideProps()**, o retorno dessa função será injetado no componente Index como propriedade. Este trecho do código será executado e renderizado no servidor e enviado para o componente, que por sua vez também será renderizado no servidor. A partir daí os dados serão enviados ao cliente.

Caso não tenha essa função, a página não será renderizada no servidor. O Next possui essa flexibilidade, de permitir ou não, que o conteúdo seja renderizado no servidor.

Se tiver a função getServerSideProps(), a aplicação vai precisar do script `"start": "next start"`, para ser publicada.


### Construído com:

* [NextJS](https://nextjs.org/) - The React Framework.
* [Sass](https://sass-lang.com/) - CSS with superpowers.
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces.

### Autor:

* **Davi Scholl** - [LinkedIn](https://www.linkedin.com/in/davischoll/)

### Licença

Licenciado sob a licença MIT - veja [LICENSE](LICENSE) para mais informações.
