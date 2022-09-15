# NLW - eSports 🕹

## Mobile 📱

### Aprendizados 🐱‍💻

#### `[Aula - 2]`:

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
