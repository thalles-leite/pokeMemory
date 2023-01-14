/* eslint-disable object-curly-spacing */
/* eslint-disable max-len */
const main = document.querySelector('main');
const cardBoard = document.querySelector('.cardBoard');
const bCards = document.querySelector('.cards');
const cards = document.querySelectorAll('.card');
const blueLight = document.querySelector('.blueLight');

// const gridAjust = () => {
//   bCards.style.gridTemplateColumns = `repeat(${lineBoardCard}, 1fr)`;
//   bCards.style.gridTemplateRows = `repeat(${lineBoardCard}, 1fr)`;
// };

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

const firstClickedCard = '';
const lastClickedCard = '';

const checkPlay = (target) => {
  target.parentNode.classList.add('rotate');
};

console.log(bCards.offsetWidth);
const generateCard = (image, lados) => {
  const tamanhoCard = Math.round(bCards.offsetHeight / Math.sqrt(2 * lados)) * 0.76;
  const tamPercent = ((tamanhoCard / bCards.offsetWidth) * 100);
  const card = document.createElement('section');
  const frontCard = document.createElement('section');
  const backCard = document.createElement('section');

  card.className = 'card';
  card.style.width = `${tamPercent}%`;
  card.style.height = `${tamPercent}%`;

  card.addEventListener('click', ({ target }) => {
    checkPlay(target);
  });

  frontCard.className = 'frontCard side';
  frontCard.style.backgroundImage = `url(./files/images/pokemons/${image}.gif)`;
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
let cont = 1;

blueLight.addEventListener('click', () => {
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


// gridAjust();


