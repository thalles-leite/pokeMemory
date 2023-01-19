/* eslint-disable object-curly-spacing */
/* eslint-disable max-len */
const bCards = document.querySelector('.cards');
const blueLight = document.querySelector('.blueLight');
let soundCorrect;
let soundWrong;
let soundVictory;

// Cria um novo objeto do cronômetro
const timer = new Timer();


// Atualiza o tempo exibido na tela a cada segundo
timer.addEventListener('secondsUpdated', () => {
  document.getElementById('timer').innerHTML = `${timer.getTimeValues().toString(['minutes', 'seconds'])}`;
});

const loadSounds = () => {
  soundCorrect = new Audio('./files/sounds/correct.wav');
  soundWrong = new Audio('./files/sounds/wrong.wav');
  soundVictory = new Audio('./files/sounds/win.wav');
  soundCorrect.load();
  soundWrong.load();
  soundVictory.load();
};

const playSoundCorrect = () => {
  soundCorrect.pause();
  soundCorrect.currentTime = 0;
  soundCorrect.play();
};

const playSoundWrong = () => {
  soundWrong.pause();
  soundWrong.currentTime = 0;
  soundWrong.play();
};

const playSoundVictory = () => {
  soundVictory.pause();
  soundVictory.currentTime = 0;
  soundVictory.play();
};

const arrayGenerator = (dificult) => {
  const arrayCards = [];
  const qtdCards = (dificult);
  while (arrayCards.length < qtdCards) {
    const number = Math.floor((Math.random()) * 39) + 1;
    if (!arrayCards.includes(number)) {
      arrayCards.push(number);
    };
  };
  const cards = [...arrayCards, ...arrayCards].sort(() => Math.random() - 0.5);
  return cards;
};

let firstClickedCard = '';
let lastClickedCard = '';

const victoryVerify = () => {
  const corrects = document.querySelectorAll('.correct').length;
  const cards = document.querySelectorAll('.card').length;
  if (corrects >= cards) {
    playSoundVictory();
    timer.stop();
    return true;
  }
};

const correctMove = () => {
  firstClickedCard.previousSibling.classList.add('correct');
  lastClickedCard.previousSibling.classList.add('correct');
  firstClickedCard = '';
  lastClickedCard = '';
  if (victoryVerify()) {
    return;
  }
  playSoundCorrect();
};

const wrongMove = () => {
  playSoundWrong();
  setTimeout(() => {
    firstClickedCard.parentNode.classList.remove('rotate');
    lastClickedCard.parentNode.classList.remove('rotate');
    firstClickedCard = '';
    lastClickedCard = '';
  }, 1000);
};

const checkPlay = (target) => {
  target.parentNode.classList.add('rotate');
  if (firstClickedCard === '') {
    firstClickedCard = target;
    return;
  };
  lastClickedCard = target;
  console.log(`Primeira carta: ${firstClickedCard.getAttribute('data-key')}\nSegunda carta: ${lastClickedCard.getAttribute('data-key')}`);
  firstClickedCard.getAttribute('data-key') === lastClickedCard.getAttribute('data-key') ? correctMove() : wrongMove();
};


const generateCard = (image, lados) => {
  const cards = document.querySelector('.cards');
  // const tamanhoCard = Math.round(bCards.offsetHeight / Math.sqrt(2 * lados)) * 0.76;
  const colGrid = Math.ceil(Math.sqrt(2 * lados));
  const rowGrid = Math.floor(Math.sqrt(2 * lados));
  console.log(colGrid, rowGrid);
  // const tamPercent = ((tamanhoCard / bCards.offsetWidth) * 100);
  const card = document.createElement('section');
  const frontCard = document.createElement('section');
  const backCard = document.createElement('section');

  card.className = 'card';
  cards.style.gridTemplateColumns = `repeat(${colGrid}, 1fr)`;
  cards.style.gridTemplateRows = `repeat(${rowGrid}, 1fr)`;

  card.addEventListener('click', ({ target }) => {
    if (firstClickedCard === '' || lastClickedCard === '') {
      // Inicia o cronômetro
      timer.start({ precision: 'secondTenths' });
      checkPlay(target);
    }
  });

  frontCard.className = 'frontCard side';
  frontCard.style.backgroundImage = `url(./files/images/pokemons/${image}.gif)`;
  backCard.setAttribute('data-key', image);
  backCard.className = 'backCard side';

  card.appendChild(frontCard);
  card.appendChild(backCard);
  bCards.appendChild(card);
};

const generateAllCards = (lados) => {
  bCards.innerHTML = '';
  const arrayCards = arrayGenerator(lados);
  arrayCards.forEach((element) => {
    generateCard(element, lados);
  });
};
let cont = 2;

blueLight.addEventListener('click', () => {
  timer.stop();
  timer.reset();
  firstClickedCard = '';
  lastClickedCard = '';
  generateAllCards(cont);
  console.log(cont);
  cont += 1;
});
blueLight.addEventListener('contextmenu', (element) => {
  element.preventDefault();
  generateAllCards(cont);
  console.log(cont);
  cont -= 1;
});


loadSounds();

// gridAjust();


