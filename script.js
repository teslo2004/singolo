const MENU = document.getElementById('header__menu');
MENU.addEventListener('click', (e) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    e.target.classList.add('active');
});