const KEY_LS_THEME = 'site-theme';

const Theme = {
  LIGHT: 'light',
  DARK: 'dark',
};

const switcherCheckboxEl = document.querySelector('.js-switcher-theme');
const htmlEl = document.querySelector('html');

switcherCheckboxEl.addEventListener('click', () => {
  const isLight = htmlEl.classList.contains('light');

  const theme = isLight ? Theme.DARK : Theme.LIGHT;

  onChangeTheme(theme);
});

function onChangeTheme(theme) {
  const isLight = htmlEl.classList.contains('light');

  if (isLight && theme !== Theme.LIGHT) {
    localStorage.setItem(KEY_LS_THEME, JSON.stringify(Theme.DARK));

    htmlEl.classList.replace('light', 'dark');

    return;
  }

  if (theme !== Theme.DARK) {
    localStorage.setItem(KEY_LS_THEME, JSON.stringify(Theme.LIGHT));

    htmlEl.classList.replace('dark', 'light');
  }
}
