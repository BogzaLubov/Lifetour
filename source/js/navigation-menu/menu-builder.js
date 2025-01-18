const LOCK_CLASS = 'page__lock';
const OPEN_MENU_CLASS = 'header__menu-button--opened';
const CLOSE_MENU_CLASS = 'header__menu-button--closed';
const NAVIGATION_MENU_ATTRIBUTE = 'data-scroll-to';

function showMenu(button) {
  button.classList.add(OPEN_MENU_CLASS);
  button.classList.remove(CLOSE_MENU_CLASS);
  document.body.classList.add(LOCK_CLASS);
}

function closeMenu(button) {
  button.classList.remove(OPEN_MENU_CLASS);
  button.classList.add(CLOSE_MENU_CLASS);
  document.body.classList.remove(LOCK_CLASS);
}

export default function buildMenu(button, menu) {
  button.addEventListener('click', () => {
    if (button.classList.contains(OPEN_MENU_CLASS)) {
      closeMenu(button);
    } else {
      showMenu(button);
    }
  });

  window.addEventListener('resize', () => {
    closeMenu(button);
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && event.target !== button && button.classList.contains(OPEN_MENU_CLASS)) {
      closeMenu(button);
    }
  });

  document.querySelectorAll(`[${NAVIGATION_MENU_ATTRIBUTE}]`)?.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
      document.querySelector(menuItem.getAttribute(NAVIGATION_MENU_ATTRIBUTE))?.scrollIntoView({ behavior: 'smooth' });
      closeMenu(button);
    });
  });
}
