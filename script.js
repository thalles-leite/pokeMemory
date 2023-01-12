const main = document.querySelector('main');
const cardBoard = document.querySelector('.cardBoard');
const numberOfChildren = cardBoard.children.length;
const lineBoardCard = Math.sqrt(numberOfChildren);
console.log(numberOfChildren);

const gridAjust = () => {
  cardBoard.style.gridTemplateColumns = `repeat(${lineBoardCard}, 1fr)`;
  cardBoard.style.gridTemplateRows = `repeat(${lineBoardCard}, 1fr)`;
};

const verifyOrientation = () => {
  if (window.orientation === 0) {
    console.log('y');
    main.style.backgroundImage = 'url(./files/images/pokedexy.png)';
    main.style.aspectRatio = '749/1123';
    main.style.maxWidth = '100%';
    cardBoard.style.transform = 'translate(-3vw, 5vh)';
    cardBoard.style.maxWidth = '75vw';
    cardBoard.style.height = '75%';
  } else {
    console.log('x');
    main.style.backgroundImage = 'url(./files/images/pokedex.png)';
    main.style.aspectRatio = 1123 / 749;
    main.style.maxWidth = '95vw';
    cardBoard.style.transform = 'translate(4.5vw, 3.5vh)';
    cardBoard.style.maxWidth = '48vw';
    cardBoard.style.height = '80%';
  }
};

window.addEventListener('orientationchange', () => {
  verifyOrientation();
});
if (window.devicePixelRatio > 1) {
  verifyOrientation();
}
gridAjust();
