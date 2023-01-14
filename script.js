const main = document.querySelector('main');
const cardBoard = document.querySelector('.cardBoard');
const bCards = document.querySelector('.cards');
// const cards = document.querySelectorAll('.card');
const numberOfChildren = bCards.children.length;
const lineBoardCard = Math.sqrt(numberOfChildren);
console.log(numberOfChildren);

const gridAjust = () => {
  bCards.style.gridTemplateColumns = `repeat(${lineBoardCard}, 1fr)`;
  bCards.style.gridTemplateRows = `repeat(${lineBoardCard}, 1fr)`;
};

// const verifyOrientation = () => {
//   if (window.orientation === 0) {
//     console.log('y');
//     main.style.backgroundImage = 'url(./files/images/pokedexy.png)';
//     main.style.aspectRatio = '749/1123';
//     main.style.maxWidth = '100%';
//     cardBoard.style.transform = 'translate(-3vw, 5vh)';
//     cardBoard.style.maxWidth = '65vw';
//     cardBoard.style.height = '65%';
//     for (const card of cards) {
//       card.style.height = '64%';
//     }
//   } else {
//     console.log('x');
//     main.style.backgroundImage = 'url(./files/images/pokedex.png)';
//     main.style.aspectRatio = 1123 / 749;
//     main.style.maxWidth = '95vw';
//     cardBoard.style.transform = 'translate(4.5vw, 3.5vh)';
//     cardBoard.style.maxWidth = '48vw';
//     cardBoard.style.height = '60%';
//     for (const card of cards) {
//       card.style.height = '90%';
//     }
//   }
// };

// window.addEventListener('orientationchange', () => {
//   verifyOrientation();
// });
// if (window.devicePixelRatio > 1) {
//   verifyOrientation();
// }
gridAjust();
