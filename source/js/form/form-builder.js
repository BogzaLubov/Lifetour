const INVALID_CLASS = 'form__input--invalid';

export default function buildForm(form) {
  const phoneElement = document.querySelector('input[name="phone"]');
  const emailElement = document.querySelector('input[name="email"]');

  phoneElement.addEventListener('keydown', () => {
    phoneElement.classList.remove(INVALID_CLASS);
  });

  emailElement.addEventListener('keydown', () => {
    emailElement.classList.remove(INVALID_CLASS);
  });

  form.addEventListener('submit', (e) => {
    phoneElement.classList.remove(INVALID_CLASS);
    const phoneRegex = /^[0-9+()\- ]+$/;
    if (!phoneRegex.test(phoneElement.value)) {
      phoneElement.classList.add(INVALID_CLASS);
      e.preventDefault();
    }

    emailElement.classList.remove(INVALID_CLASS);
    const emailRegex = /^[a-zA-Za-яA-Я0-9._%+-]+@[a-zA-Za-яA-Я0-9.-]+\.[a-zA-Zрф]{2,}$/;
    if (!emailRegex.test(emailElement.value)) {
      emailElement.classList.add(INVALID_CLASS);
      e.preventDefault();
    }
  });
}
