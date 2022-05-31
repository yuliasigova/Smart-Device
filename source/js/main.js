const descriptionBox = document.querySelector('.description__box');
const descriptionContainer = document.querySelector('.description__container');

document.body.addEventListener('click', (evt) => {
  const button = document.querySelector('[data-description]');
  if (evt.target === button) {
    evt.preventDefault();
    descriptionBox.classList.toggle('is-active');
    descriptionContainer.classList.toggle('is-active');
  }
});

const menuClick = () => {
  const menu = document.querySelectorAll('[data-menu]');
  const buttonsMenu = document.querySelectorAll('[data-button]');
  const footer = document.querySelector('.footer');
  footer.addEventListener('click', (evt) => {
    if (evt.target.type === 'button') {
      let buttonActive = evt.target;
      let menuActive = evt.target.closest('[data-menu]');
      if (buttonActive.classList.contains('is-close')) {
        buttonActive.classList.remove('is-close');
        buttonActive.classList.add('is-active');
      } else {
        buttonActive.classList.remove('is-active');
        buttonActive.classList.add('is-close');
      }
      menu.forEach((list) => {
        if (list.classList.contains('is-active') && !menuActive.classList.contains('is-active')) {
          list.classList.remove('is-active');
          buttonsMenu.forEach((button) => {
            if (button.classList.contains('is-active') && buttonActive.classList.contains('is-active')) {
              button.classList.remove('is-active');
              button.classList.add('is-close');
              buttonActive.classList.remove('is-close');
              buttonActive.classList.add('is-active');
            }
          });
        }
      });
      menuActive.classList.toggle('is-active');
    }
  });
};

menuClick();

const openPopup = () => {
  const buttonPopup = document.querySelector('[data-navButton]');
  const popup = document.querySelector('.modal');
  const button = popup.querySelector('[data-modal]');
  const inputText = popup.querySelector('[data-modalInput]');
  if (buttonPopup) {
    buttonPopup.addEventListener('click', (evt) => {
      evt.preventDefault();
      popup.classList.add('is-active');
      inputText.focus();
      // document.body.classList.add('body--overlay');
      document.body.style.overflow = 'hidden';
    });
  }
  button.addEventListener('click', () => {
    popup.classList.remove('is-active');
    document.body.style.overflow = 'auto';
  });
};

openPopup();
