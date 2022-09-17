# NLW - eSports 🕹

## Mobile 📱

### Aprendizados 🐱‍💻

#### [Aula - 2]:

- Diretório `assets`:
  - `adaptive-icon.png`: ajusta entre as diversas formas exibição do ícone em dispositivos Android;
  - `icon.png`: ícone geralmente usado;
  - `splash.png`: tela de carregamento.
  - **Essas informações podem ser alteradas no arquivo:** `app.json`.
- Alterar a cor de fundo da aplicação:
  - No `app.json` alterar o `splash > backgroundColor`.
- Algumas imagens possuem um `@2x` ou `@3x` no nome do arquivo. Esse padrão permite um melhor aproveitamento da densidade de pixels dependendo de cada dispositivo. Isso é gerenciado pelo próprio React Native.
- Costumização da <StatusBar /> passando as propriedades `barStyle="light-content"` ,`backgroundColor="transparent"`, `translucent`;
- Instalação e configuração da font Inter no projeto com a biblioteca `@expo-google-fonts/inter` e através do hook `useFonts`, o qual recebe um objeto com as fontes utilizadas.
  - O hook também retorna um `array` em que na primeira posição está um booleano indicando se as fontes foram carregadas.

#### [Aula - 4]:

- O ReactNative lida com diferentes formas de navegação utilizando a biblioteca `@react-navigation`.
  - Stack - navegação em pilha, ocorre uma sobreposição de telas, mantendo as telas anteriores embaixo da pilha mas carregadas na memória.
  - Tab - navegação utilizada para quando precisamos acessar uma tela de qualquer lugar da nossa aplicação.
- A biblioteca também trabalha com os formatos de navegação em pacotes separados:
  - `@react-navigation/native-stack`
- Estratégia de navegação desacoplada. Exporta-se a função `Routes()` separadamente da estratégia de navegação escolhida, permitindo a facil substituição internamente no: `<NavigationContainer>`
- Uma forma interessante de tipar as rotas criadas é como descrito no arquivo `navigation.d.ts`:
  - ````JAVASCRIPT export declare global {
      namespace ReactNavigation {
        interface RootParamList {
          Home: undefined;
          Game: undefined;
        }
      }
    }```
    ````
  - O `undefined` na tipagem sinaliza que as rotas não receberão parâmetros.
- O Expo possui uma biblioteca integrada de ícones chamada `@expo/vector-icons`.
- Na estlização, para valores númericos como `width: 72` não usa-se `width: '72px'`, pois dessa forma, o próprio React Native gerencia a melhor densidade para cada dispositivo.
- O componente `<Text>` do React Native é muito útil. Utilizando a prop `numberOfLines` podemos definir o número máximo de linhas que queremos para um texto. Ao atingir esse valor, `...` são colocados no final da frase, evitando que haja a quebra de um layout, por exemplo.
