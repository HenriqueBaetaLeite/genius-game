let order = [];
let clickedOrder = [];
let score = 0;

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

const shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};

// acende a próxima cor
const lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.toggle('selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.toggle('selected');
  }, 500);
};

// checa se os botões clicados são os mesmos da ordem gerada no jogo
const checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
    setTimeout(() => nextLevel(), 1500);
  }
};

// função do click do usuário

const click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.toggle('selected');

  setTimeout(() => {
    createColorElement(color).classList.toggle('selected');
    checkOrder();
  }, 500);
};

// função que retorna a cor

const createColorElement = (color) => {
  if (color == 0) {
    return green;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3) {
    return blue;
  }
};

// função que passa para o próximo nível

const nextLevel = () => {
  score++;
  shuffleOrder();
};

// função game over

const gameOver = () => {
  alert(`Game Over!\nPontuação: ${score}\nClique em OK para iniciar um novo jogo`);
  order = [];
  clickedOrder = [];
  playGame();
};

// função que inicia o jogo

const playGame = () => {
  alert(`Boas vindas ao game de memória!\nIniciando novo jogo aguarde...`);
  score = 0;

  nextLevel();
};

// eventos de click para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// início do jogo
playGame();
