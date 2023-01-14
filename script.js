const main = document.querySelector('main');
const cardBoard = document.querySelector('.cardBoard');
const bCards = document.querySelector('.cards');
const cards = document.querySelectorAll('.card');

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


const generateCard = (image, lados) => {
  let tamanhoCard = bCards.offsetWidth / 3 - 40;
  if (lados === 2) {
    tamanhoCard = bCards.offsetWidth / 2 - 15;
  }
  if (lados > 7 && lados < 9) {
    tamanhoCard = bCards.offsetWidth / 4 - 15;
  }

  if (lados >= 9) {
    tamanhoCard = bCards.offsetWidth / 5 - 15;
  }

  const card = document.createElement('section');
  const frontCard = document.createElement('section');
  const backCard = document.createElement('section');

  card.className = 'card';
  card.style.width = `${tamanhoCard}px`;
  card.style.height = `${tamanhoCard}px`;
  card.addEventListener('click', () => {
    card.classList.add('rotate');
  });

  frontCard.className = 'frontCard side';
  frontCard.style.backgroundImage = `url(./files/images/pokemons/${image}.gif)`;
  backCard.className = 'backCard side';

  card.appendChild(frontCard);
  card.appendChild(backCard);
  bCards.appendChild(card);
};

const generateAllCards = (lados) => {
  const arrayCards = arrayGenerator(lados);
  arrayCards.forEach((element) => {
    generateCard(element, lados);
  });
};


generateAllCards(12);

// gridAjust();


