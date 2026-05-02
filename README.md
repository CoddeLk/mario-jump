# 🍄 Mario Jump - Web Game

[![GitHub license](https://img.shields.io/github/license/CoddeLk/cyber-jump)](https://github.com/CoddeLk/cyber-jump/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/CoddeLk/cyber-jump)](https://github.com/CoddeLk/cyber-jump/stargazers)

Um jogo clássico inspirado no Super Mario, desenvolvido com tecnologias web fundamentais. O objetivo é simples: pular os obstáculos e sobreviver o maior tempo possível! 🏃‍♂️💨

---

## 🚀 Demonstração

Você pode jogar a versão online aqui:  
👉 [**https://coddelk.github.io/mario-jump/**](https://CoddeLk.github.io/cyber-jump/)  
*(Substitua pelo link gerado no seu GitHub Settings > Pages)*

---

## 🕹️ Como Jogar

1. Acesse o link do projeto ou abra o `index.html` no seu navegador.
2. Pressione **qualquer tecla** (ou a tecla de pulo configurada) para o Mario saltar.
3. Evite encostar no cano verde!
4. Se o Mario colidir, o jogo termina e você pode clicar em **"Jogar Novamente"**.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando o "trio de ferro" do Front-end:

*   [**HTML5**](https://developer.mozilla.org/pt-BR/docs/Web/HTML): Estrutura do jogo e elementos de tela.
*   [**CSS3**](https://developer.mozilla.org/pt-BR/docs/Web/CSS): Estilização, posicionamento absoluto e **Keyframe Animations** para os movimentos.
*   [**JavaScript**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript): Lógica de colisão, controle de animações e manipulação do DOM.

---

## 📁 Estrutura do Projeto

Para manter o código limpo e profissional, o projeto segue esta organização:
```text
├── 📂 css
│   └── style.css          # Estilos e animações
├── 📂 images
│   ├── clouds.png         # Fundo animado
│   ├── mario.gif          # Personagem principal
│   ├── pipe.png           # Obstáculo
│   └── game-over.png      # Tela de derrota
├── 📂 js
│   └── script.js          # Lógica do jogo (pulo e colisão)
├── 📂 sounds
│   ├── jump.mp3           # Efeito sonoro de pulo
│   └── game-over.mp3      # Efeito sonoro de derrota
└── index.html             # Arquivo principal
