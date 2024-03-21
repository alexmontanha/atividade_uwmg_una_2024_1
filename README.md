
# Atividade Avaliativa: Glossário Javascript

## Contexto

Como parte da Unidade Curricular de Usabilidade, Web, Mobile e Games do curso de Ciência da Computação, vocês foram desafiados a desenvolver um projeto prático para demonstrar suas habilidades e conhecimentos adquiridos.

## Descrição do Projeto

O projeto consiste na criação de um **Glossário Javascript**. Este glossário deve conter termos e conceitos relacionados à linguagem de programação Javascript.

O glossário deve ser interativo e fácil de usar. Os usuários devem ser capazes de navegar pelos termos e conceitos, visualizar suas definições e obter informações adicionais sobre cada item.

A interface do glossário deve ser responsiva e de fácil navegação. O design deve ser minimalista e atraente, com um layout limpo e organizado.

Os termos e conceitos do glossário devem ser armazenados em um arquivo JSON. Este arquivo deve ser carregado dinamicamente na página com o auxílio de Javascript e da biblioteca jQuery.

## Exemplo de um site publicado

Aqui está um exemplo de um site publicado que contém um glossário interativo: [Glossário de Termos de Programação](https://alexmontanha.github.io/maps/).

## Objetivos

O objetivo principal deste projeto é aplicar seus conhecimentos em Javascript, HTML e CSS para criar um glossário interativo e fácil de usar. Além disso, vocês devem demonstrar uma compreensão clara dos termos e conceitos apresentados no glossário.

## Requisitos Técnicos

O projeto deve ser desenvolvido utilizando as seguintes tecnologias:

- HTML: para a estrutura da página web.
- CSS: para o estilo e design da página web.
- Javascript: para a funcionalidade interativa da página web.

Além disso, vocês devem criar um arquivo JSON que contém os termos do glossário. Este arquivo deve ser carregado dinamicamente na página com o auxílio de Javascript e da biblioteca jQuery.

## Design de Interface

O design da interface deve ser minimalista, com um layout responsivo e de fácil navegação. Lembre-se de que o design deve ser "mobile first".

## Entrega

O projeto deve ser entregue até a data especificada no Ulife. Por favor, coloque na resposta da entrega do Ulife, o link do código fonte no GitHub e o endereço da página publicada no GitHub Pages.

## O que é JSON?

JSON (JavaScript Object Notation) é um formato de dados leve para armazenar e transportar dados. JSON é frequentemente usado quando os dados são enviados de um servidor para uma página da web. JSON é "autodescritivo" e fácil de entender.

## Como criar um JSON similar ao exemplo?

O JSON é essencialmente uma representação de dados como pares de chave-valor. No exemplo nesse repositório, no arquivo **db.json**, cada objeto no array contém três pares de chave-valor: `id`, `titulo` e `descricao`. Aqui está como você pode criar um JSON similar:

1. Comece com um colchete aberto `[` para iniciar o array.

2. Cada item no array é um objeto, que começa com um colchete aberto `{`.

3. Dentro de cada objeto, você tem pares de chave-valor. Cada par de chave-valor consiste em uma chave (como `id`, `titulo`, `descricao`), seguida por dois pontos `:`, seguido pelo valor. Os valores podem ser números, strings, booleanos, outros objetos, arrays ou `null`.

4. Separe cada par de chave-valor com uma vírgula `,`.

5. Feche cada objeto com um colchete fechado `}`.

6. Separe cada objeto com uma vírgula `,`.

7. Feche o array com um colchete fechado `]`.

Aqui está um exemplo de como você pode criar um novo item no array:

```json
{
    "id": 5,
    "titulo": "Arrays em JavaScript",
    "descricao": "Um array em JavaScript é um objeto global usado na construção de 'arrays', que são tipos de dados de alto nível, semelhantes a listas."
}
```

## O que é a biblioteca jQuery?

jQuery é uma biblioteca JavaScript rápida, pequena e rica em recursos. Ela simplifica a manipulação de documentos HTML, o tratamento de eventos, a animação e as interações Ajax para o desenvolvimento web rápido. jQuery é projetado para mudar a maneira como você escreve JavaScript.

## Como incluir jQuery em um projeto?

Para incluir jQuery em um projeto, você pode baixar a biblioteca jQuery do site oficial (jquery.com) e referenciá-la em seu arquivo HTML usando a tag `<script>`. Alternativamente, você pode usar uma CDN (Content Delivery Network) para incluir jQuery. Aqui está um exemplo de como incluir jQuery usando a CDN do Google:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```

## Explicação do código: Função `db.init` e jQuery

Como exemplo, desenvolvi e deixei para que utilizem como exemplo, uma mini biblioteca **db.js** para manipular um json como banco de dados. Em outra palavras é uma função que lê um arquivo JSON e armazena os dados em uma variável. Aqui está uma explicação linha por linha:

1. `db = {};`: Isso cria um objeto vazio chamado `db`.

2. `db.init = function(callback) {`: Isso adiciona uma função chamada `init` ao objeto `db`. Essa função aceita um argumento chamado `callback`.

3. `$.getJSON('data/db.json', function(data) {`: Isso usa a função `getJSON` do jQuery para ler um arquivo JSON localizado em 'data/db.json'. Quando o arquivo é lido com sucesso, a função de callback é chamada com os dados do arquivo JSON como argumento.

4. `db.data = data;`: Isso armazena os dados do arquivo JSON na propriedade `data` do objeto `db`.

5. `if(callback) {`: Isso verifica se uma função de callback foi fornecida.

6. `callback();`: Se uma função de callback foi fornecida, ela é chamada.

7. `}};`: Isso fecha a função de callback e a função `init`.

## O que é DOM?

DOM (Document Object Model) é uma interface de programação para documentos HTML e XML. Ele representa a estrutura do documento e permite que os programas alterem o documento - estrutura, estilo e conteúdo. O DOM representa o documento como um conjunto estruturado de nós e objetos que possuem propriedades e métodos.

### Hierarquia DOM

A hierarquia DOM é como uma árvore com vários nós. O documento inteiro é um documento nó, cada tag HTML é um elemento nó, o conteúdo dentro das tags HTML são nós de texto, e os atributos HTML são nós de atributo.

### Manipulação do DOM com JavaScript

JavaScript pode manipular todos os nós no DOM. Ele pode criar, modificar e remover elementos e atributos existentes. JavaScript também pode alterar todos os aspectos do CSS e reagir a todos os eventos existentes no página.

#### Alguns exemplos

A seguir, um exemplo utilizando jQuery para manipular o DOM.

1. Esta função percorre os dados em `db.data` e para cada item, cria uma nova opção para um elemento select com o id `slc-topicos`. O valor da opção é o id do item e o texto da opção é o título do item.

    ```javascript
    function initSelect() {
        var select = $('#slc-topicos');
        $.each(db.data, function(index, item) {
            select.append($('<option>', {
                value: item.id,
                text: item.titulo
            }));
        });
    }
    ```

2. Esta função é chamada quando o valor do elemento select muda. Ele obtém o valor do elemento select (que é o id do item), encontra o item correspondente em `db.data`, e atualiza o texto de dois elementos: um com o id `lbl-txt-desc` e outro com o id `txt-desc`.

    ```javascript
    $('#slc-topicos').change(function() {
        var id = $(this).val();
        var item = db.data.find(function(item) {
            return item.id == id;
        });
        $('#lbl-txt-desc').text(item.titulo);
        $('#txt-desc').text(item.descricao);
    });
    ```

3. Esta linha chama a função `init` no objeto `db`, passando `initSelect` como um callback. A função `init` é definida em algum lugar não mostrado no código que você forneceu, mas presumivelmente carrega os dados em `db.data` e então chama o callback.

    ```javascript
    db.init(initSelect);
    ```

## Explicação do código e das tags `<head>` e `<meta>`

### Tag `<head>`

A tag `<head>` é um elemento que contém metadados (dados sobre dados) sobre o documento HTML, como o título da página e onde encontrar CSS. Os elementos dentro da tag `<head>` não são renderizados na página da web.

### Tag `<meta>`

A tag `<meta>` é usada para fornecer metadados sobre o documento HTML. Esses metadados não serão exibidos na página, mas podem ser úteis para navegadores ou motores de busca. As tags `<meta>` são colocadas dentro da tag `<head>` do documento HTML.

O código abaixo representa uma seção `<head>` de um documento HTML. Aqui está um exemplo com algumas possibilidades de uso:

- `<meta charset="utf-8">`: Define a codificação de caracteres para o documento.
- `<meta name="viewport" content="width=device-width, initial-scale=1">`: Faz a página ser responsiva em dispositivos móveis.
- `<meta name="description" content="Meu Dicionário Javascript">`: Fornece uma descrição do site para motores de busca.
- `<meta name="author" content="Professor Montanha">`: Define o autor do documento.
- `<meta name="keywords" content="html, css, web, desenvolvimento, front-end">`: Define as palavras-chave para motores de busca.
- `<title>Meu Dicionário Javascript</title>`: Define o título da página, que é exibido na guia do navegador.
- `<link rel="stylesheet" href="css/style.css">`: Conecta um arquivo CSS externo ao documento HTML.
- `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>`: Adiciona a biblioteca jQuery ao documento HTML.
- `<script src="js/db.js"></script>` e `<script src="js/main.js"></script>`: Adicionam arquivos JavaScript externos ao documento HTML.

## O que é o GitHub Pages?

O GitHub Pages é um serviço de hospedagem estática oferecido pelo GitHub para hospedar diretamente a partir de repositórios do GitHub. Ele é projetado para hospedar seus projetos pessoais, organizacionais ou de projetos diretamente de um repositório GitHub. Você pode criar e publicar sites online usando o GitHub.

### Tutorial para publicar com o GitHub Pages

Aqui estão as etapas para publicar seu site usando o GitHub Pages:

1. **Crie um repositório no GitHub**: Se você ainda não tem um, crie um repositório no GitHub. Você pode nomeá-lo como quiser.

2. **Ative o GitHub Pages para o seu repositório**: Vá para a guia "Settings" do seu repositório. Role para baixo até a seção "GitHub Pages". No dropdown "Source", selecione a branch que você deseja usar para o GitHub Pages (geralmente a branch `main` ou `gh-pages`, se você tiver uma) e clique em "Save".

3. **Adicione seu conteúdo ao repositório**: Agora você pode começar a adicionar seu conteúdo HTML, CSS e JavaScript ao repositório. Você pode fazer isso criando novos arquivos diretamente no GitHub ou clonando o repositório para o seu computador local e fazendo upload dos arquivos.

4. **Confirme e faça push das suas alterações**: Quando você terminar de adicionar seu conteúdo, confirme suas alterações e faça push delas para o GitHub.

5. **Acesse seu site**: Após alguns minutos, seu site deve estar disponível online. Você pode acessá-lo no seguinte URL: `https://<seu-nome-de-usuario>.github.io/<nome-do-repositório>/`.

Lembre-se de que o GitHub Pages é destinado apenas para hospedagem estática, então você não será capaz de hospedar um site com um back-end de servidor.
