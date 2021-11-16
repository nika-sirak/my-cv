const STORAGE_KEY = 'theme';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchEl = document.querySelector('.theme-switch__toggle');

// Добавляє клас на body
reloadPage();

themeSwitchEl.addEventListener('click', onCheckboxClick);

function onCheckboxClick(evt) {
  if (document.body.classList.contains(Theme.LIGHT)) {
    addClassTheme(Theme.LIGHT, Theme.DARK);
    localStorage.setItem(STORAGE_KEY, document.body.classList.value);
  } else {
    addClassTheme(Theme.DARK, Theme.LIGHT);
    localStorage.setItem(STORAGE_KEY, document.body.classList.value);
  }
}

// Зберігає тему
function reloadPage() {
  const savedTheme = localStorage.getItem(STORAGE_KEY);

  if (savedTheme === Theme.DARK || savedTheme === Theme.LIGHT) {
    document.body.classList.add(savedTheme);
  }

  if (savedTheme === Theme.DARK) {
    themeSwitchEl.checked = true;
  }
}

function addClassTheme(light, dark) {
  document.body.classList.add(dark);
  document.body.classList.remove(light);
}
