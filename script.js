const main = document.querySelector('main');


const verifyOrientation = () => {
  if (window.orientation === 0) {
    console.log('y');
    main.style.backgroundImage = 'url(./files/images/pokedexy.png)';
    main.style.aspectRatio = '749/1123';
    main.style.maxWidth = '100%';
  } else {
    console.log('x');
    main.style.backgroundImage = 'url(./files/images/pokedex.png)';
    main.style.aspectRatio = 1123 / 749;
    main.style.maxWidth = '62vw';
  }
};

window.addEventListener('orientationchange', () => {
  verifyOrientation();
});

verifyOrientation();
