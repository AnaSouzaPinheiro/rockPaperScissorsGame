const pedraP = document.querySelector(".pedraP");
const pedraC = document.querySelector(".pedraC");
const papelP = document.querySelector(".papelP");
const papelC = document.querySelector(".papelC");
const tesouraP = document.querySelector(".tesouraP");
const tesouraC = document.querySelector(".tesouraC");
const botaoPedra = document.querySelector(".botaoPedra");
const botaoPapel = document.querySelector(".botaoPapel");
const botaoTesoura = document.querySelector(".botaoTesoura");
const start = document.querySelector(".start");
const escolha = document.querySelector(".escolha");
const close = document.querySelector(".close");
const winningMessageTextElement = document.querySelector(
  ".winning-message-text"
);
const winningMessage = document.querySelector(".winning-message");
const restartButton = document.querySelector(".winning-message-button");

let attackrandom;
let list;
let opc;
let botaoPedraClicado = false;
let botaoPapelClicado = false;
let botaoTesouraClicado = false;

const startGame = () => {
  escolha.classList.add("show-escolha");
  pedraP.classList.add("show-attack");
  pedraC.classList.add("show-attack");
};

close.addEventListener("click", function () {
  escolha.classList.remove("show-escolha");
});

const animationHands = () => {
  pedraC.style.display = "block";
  pedraP.style.display = "block";
  papelC.style.display = "none";
  tesouraC.style.display = "none";
  papelP.style.display = "none";
  tesouraP.style.display = "none";
  pedraP.classList.add("animation-hands");
  pedraC.classList.add("animation-hands");
};

const generateRandomAttack = () => {
  list = [pedraC, papelC, tesouraC];
  opc = parseInt(Math.random() * 3);
  attackrandom = list[opc];
  console.log(attackrandom);
};

const attack = () => {
  generateRandomAttack();

  // Ocultar todos os elementos de pedra, papel e tesoura
  pedraC.style.display = "none";
  papelC.style.display = "none";
  tesouraC.style.display = "none";

  // Exibir apenas o elemento correspondente à escolha do jogador
  if (attackrandom === pedraC) {
    pedraC.style.display = "block";
  } else if (attackrandom === tesouraC) {
    tesouraC.style.display = "block";
  } else if (attackrandom === papelC) {
    papelC.style.display = "block";
  }

  attackrandom.classList.add("show-attack");
};

botaoPedra.addEventListener("click", function () {
  escolha.classList.remove("show-escolha");
  animationHands();

  setTimeout(function () {
    papelP.style.display = "none";
    tesouraP.style.display = "none";
    attack();
    pedraP.style.display = "block";

    botaoPedraClicado = true;
    checkForWin();
    checkForLose();
    checkForDraw();
  }, 2000); // Ajuste o tempo de acordo com a duração da animação (em milissegundos)
});

botaoPapel.addEventListener("click", function () {
  // Lógica para quando o botão do papel é clicado
  escolha.classList.remove("show-escolha");
  animationHands();

  setTimeout(function () {
    pedraP.style.display = "none";
    tesouraP.style.display = "none";
    attack();
    papelP.style.display = "block";

    botaoPapelClicado = true;
    checkForWin();
    checkForLose();
    checkForDraw();
  }, 2000);
});

botaoTesoura.addEventListener("click", function () {
  // Lógica para quando o botão da tesoura é clicado
  escolha.classList.remove("show-escolha");
  animationHands();

  setTimeout(function () {
    papelP.style.display = "none";
    pedraP.style.display = "none";
    attack();
    tesouraP.style.display = "block";

    botaoTesouraClicado = true;
    checkForWin();
    checkForLose();
    checkForDraw();
  }, 2000);
});

const checkForWin = () => {
  if (
    (attackrandom === papelC && botaoTesouraClicado) ||
    (attackrandom === pedraC && botaoPapelClicado) ||
    (attackrandom === tesouraC && botaoPedraClicado)
  ) {
    winningMessageTextElement.innerText = "Você ganhou!";
    winningMessage.classList.add("show-winning-message");
  }
};

const checkForDraw = () => {
  if (
    (attackrandom === papelC && botaoPapelClicado) ||
    (attackrandom === pedraC && botaoPedraClicado) ||
    (attackrandom === tesouraC && botaoTesouraClicado)
  ) {
    winningMessage.classList.add("show-winning-message");
    winningMessageTextElement.innerText = "Empate!";
  }
};

const checkForLose = () => {
  if (
    (attackrandom === papelC && botaoPedraClicado) ||
    (attackrandom === pedraC && botaoTesouraClicado) ||
    (attackrandom === tesouraC && botaoPapelClicado)
  ) {
    winningMessageTextElement.innerText = "Você perdeu!";
    winningMessage.classList.add("show-winning-message");
  }
};

start.addEventListener("click", startGame);
restartButton.addEventListener("click", function () {
  /*tesouraP.style.display = "none";
        papelP.style.display = "none";
        tesouraC.style.display = "none";
        papelC.style.display = "none";
        
        pedraP.style.display = "block"
        pedraC.style.display = "block"*/
  document.location.reload(true);
  attackrandom = null;
  winningMessage.classList.remove("show-winning-message");
});