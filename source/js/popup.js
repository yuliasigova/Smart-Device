import IMask from 'imask';

const openPopup = () => {
  const buttonPopup = document.querySelector('[data-nav-button]');
  const popupOverlay = document.querySelector('.modal');
  const popup = popupOverlay.querySelector('.modal__container');
  const button = popup.querySelector('[data-modal]');
  const inputText = popup.querySelector('[data-modal-input]');
  const inputTel = popup.querySelector('[data-type]');
  const textArea = popup.querySelector('[data-modal-text]');
  const inputCheckbox = popup.querySelector('[data-modal-checkbox]');
  const inputForm = document.querySelector('[data-form-input]');
  const inputTelForm = document.querySelector('[data-type="form-tel"]');
  const textAreaForm = document.querySelector('[data-form-text]');
  const inputCheckboxForm = document.querySelector('[data-form-checkbox]');
  const formModal = popup.querySelector('.form');
  const form = inputForm.closest('.form');

  if (buttonPopup) {
    buttonPopup.addEventListener('click', (evt) => {
      evt.preventDefault();
      popup.classList.add('is-active');
      inputText.focus();
      popupOverlay.classList.add('modal__overlay');
      document.body.style.overflow = 'hidden';
    });
  }

  document.body.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      if (popup.classList.contains('is-active')) {
        evt.preventDefault();
        removePopup();
      }
    }
  });

  if (popup.classList.contains('is-active')) {
    formModal.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const data = {
        'name': inputText.value,
        'tel': inputTel.value,
        'checkbox': inputCheckbox.value,
      };
      const successRequest = () => {
        inputText.value = '';
        inputTel.value = '';
        inputCheckbox.checked = '';
        textArea.value = '';
      };
      localStorage.setItem('data', JSON.stringify(data));
      sendData(JSON.stringify(data), successRequest);
    });
  } else {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const data = {
        'name': inputForm.value,
        'tel': inputTelForm.value,
        'checkbox': inputCheckboxForm.value,
      };
      const successRequest = () => {
        inputForm.value = '';
        inputTelForm.value = '';
        inputCheckboxForm.checked = '';
        textAreaForm.value = '';
      };
      localStorage.setItem('data', JSON.stringify(data));
      sendData(JSON.stringify(data), successRequest);
    });
  }


  const sendData = (body, success) => {
    fetch('https://echo.htmlacademy.ru', {
      method: 'POST',
      body,
    })
        .then(() => {
          success();
        })
        .catch(() => {
          throw new Error('Can\'t add contact data');
        });
  };

  const removePopup = () => {
    popup.classList.remove('is-active');
    document.body.style.overflow = 'auto';
    popupOverlay.classList.remove('modal__overlay');
  };

  button.addEventListener('click', removePopup);

  popupOverlay.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('modal__overlay')) {
      removePopup();
    }
  });
};


const addMask = () => {
  const inputs = document.querySelectorAll('[data-type]');
  // eslint-disable-next-line new-cap
  inputs.forEach((input) => IMask(input, {mask: '+{7}(000)000-00-00'}));
};

addMask();


export default openPopup;
