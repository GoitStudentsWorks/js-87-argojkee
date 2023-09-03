import { Notify } from 'notiflix';
import { getName } from './loginApi.js';

const regBtn = document.getElementById('head-signup-btn');
const infoUserBtn = document.getElementById('head-logged-steven');
const logOutBtn = document.querySelector('.head-loggedup-btn');
const spanUserName = document.querySelector('.head-username');
const themetoggleEl = document.querySelector('.themetoggle');

// Dark theme for local storage
themetoggleEl.addEventListener('click', event => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  switchToDarkTheme();
});

function switchToDarkTheme() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('body').classList.add('dark');
    } else {
      document.querySelector('body').classList.remove('dark');
    }
  } catch (err) {}
}

switchToDarkTheme();

// Burger button
const burgerSwitch = document.querySelector('.burger-head');
const burgerCross = document.querySelector('.burger-cross');

document.querySelector('.js-cross-switch').addEventListener('click', event => {
  event.preventDefault();

  burgerSwitch.classList.toggle('header-switch-hidden');
  burgerCross.classList.toggle('header-switch-hidden');
});

// Highlighting selected page in header with yellow color

const shoppListBtn = document.querySelector('.js-shop-btn');
const headHomeBtn = document.querySelector('.header-home');

if (document.location.href.includes('shopping')) {
  shoppListBtn.classList.add('header-selected-page');
  headHomeBtn.classList.remove('header-selected-page');
} else {
  shoppListBtn.classList.remove('header-selected-page');
  headHomeBtn.classList.add('header-selected-page');
}

// Hiding and showing Signing up BTN and logging out BTN

export function headBtnAuthorization() {
  if (window.screen.availWidth < 768) {
    hideHomeAndShop();
    regBtn.classList.add('isHidden');
    infoUserBtn.classList.add('isHidden');
  } else {
    checkOnLogin();
    themetoggleEl.classList.remove('isHidden');
  }

  logOutBtn.classList.remove('deleted');
}

//Отображение кнопок авторизации когда авторизирован
export function showBtnWhenAuth() {
  infoUserBtn.classList.remove('isHidden');
  regBtn.classList.add('isHidden');
}

//Отображение кнопок авторизации когда не авторизирован

function hideBtnWhenNotAuth() {
  infoUserBtn.classList.add('isHidden');
  regBtn.classList.remove('isHidden');
}

//Показываем Хом и Шоп
export function showHomeAndShop() {
  shoppListBtn.classList.remove('isHidden');
  headHomeBtn.classList.remove('isHidden');
}

// Скрываем Хом и Шоп
function hideHomeAndShop() {
  shoppListBtn.classList.add('isHidden');
  headHomeBtn.classList.add('isHidden');
}

//Правильное отображение кнопок, когда играешься вьюпортом
window.addEventListener('resize', headBtnAuthorization);

//Нажатие на кнопку "Зарегестрироваться"

const registerModal = document.querySelector('.loginBacdropLogIn');

regBtn.addEventListener('click', onRegBtnClick);

function onRegBtnClick() {
  registerModal.classList.remove('isHidden');
}

//Логика функции при закрытии модального окна регистрации

export function checkButtonsOnCloseModal() {
  if (window.screen.availWidth < 768) {
    hideHomeAndShop();
    if (localStorage.getItem('bookshelId')) {
      showBtnWhenAuth();
      //!Когда будет готов бургер - написать логику его закрытия
    } else {
      hideBtnWhenNotAuth();
    }
  } else {
    checkOnLogin();
  }
}

//Проверям регистрацию и отображаем нужные кнопки при вью-порте выше 768
export function checkOnLogin() {
  if (localStorage.getItem('bookshelId')) {
    showHomeAndShop();
    showBtnWhenAuth();
  } else {
    hideBtnWhenNotAuth();
    hideHomeAndShop();
  }
}

// Всплывающая кнопка выхода с личного кабинета

infoUserBtn.addEventListener('click', onUserBtnClick);

function onUserBtnClick() {
  if (logOutBtn.classList.contains('isHidden')) {
    logOutBtn.classList.remove('isHidden');
  } else {
    logOutBtn.classList.add('isHidden');
  }
}

logOutBtn.addEventListener('click', onLogoutClick);

function onLogoutClick() {
  localStorage.removeItem('bookshelId');
  hideHomeAndShop();
  hideBtnWhenNotAuth();
  logOutBtn.classList.add('isHidden');
  if (window.location.href.includes('shopping')) {
    window.location.pathname = '/index.html';
  }
}

// Switching  UserName in a Header UserButton
const switchingUserName = async () => {
  if (localStorage.getItem('bookshelId')) {
    let headerUserName = await getName();
    spanUserName.textContent =
      headerUserName.length > 6
        ? `${headerUserName.slice(0, 6)}...`
        : headerUserName;
  }
  headBtnAuthorization();
};
switchingUserName();

const gg = 'afkdskjgslkfsklf';
