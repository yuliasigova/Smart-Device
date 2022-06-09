import openPopup from './popup';

const openDescription = () => {
  const descriptionBox = document.querySelectorAll('[data-description]');
  const button = document.querySelector('[data-description-button]');
  descriptionBox.forEach((box) => {
    if (box.classList.contains('no-js')) {
      box.classList.remove('no-js');
      if (button) {
        button.addEventListener('click', (evt) => {
          evt.preventDefault();
          box.classList.toggle('is-active');
        });
      }
    }
  });
};

const openAccordion = () => {
  const menu = document.querySelectorAll('[data-menu]');
  const buttonsMenu = document.querySelectorAll('[data-menu-button]');
  const listsMenu = document.querySelectorAll('[data-menu-list]');
  buttonsMenu.forEach((buttonMenu) => {
    if (buttonMenu.classList.contains('no-js')) {
      buttonMenu.classList.remove('no-js');
    }
  });
  listsMenu.forEach((listMenu) => {
    if (listMenu.classList.contains('no-js')) {
      listMenu.classList.remove('no-js');
    }
  });
  menu.forEach((list) => {
    const buttonActive = list.querySelector('[data-menu-button]');
    const menuActive = list.querySelector('[data-menu-list]');

    list.addEventListener('click', () => {
      if (buttonActive.classList.contains('is-active')) {
        buttonActive.classList.remove('is-active');
      } else {
        buttonsMenu.forEach((button) => {
          button.classList.remove('is-active');
        });
        buttonActive.classList.add('is-active');
      }
      if (menuActive.classList.contains('is-active')) {
        menuActive.classList.remove('is-active');
      } else {
        listsMenu.forEach((accordionList) => {
          accordionList.classList.remove('is-active');
        });
        menuActive.classList.add('is-active');
      }
    });
  });
};

openDescription();
openPopup();
openAccordion();
