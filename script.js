const MENU = document.getElementById('header__menu');
MENU.addEventListener('click', (e) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    e.target.classList.add('active');
});

const NEXT = document.getElementById('nextImg');
const PREV = document.getElementById('prevImg');
const FIRST = document.getElementById('slide-1');
const SECOND = document.getElementById('slide-2')

NEXT.addEventListener('click', onNextBtnClick);
PREV.addEventListener('click', onPrevBtnClick);


function onNextBtnClick() {
    if (NEXT.click) {
        FIRST.classList.toggle('slider__active');
        SECOND.classList.toggle('slider__active');
    }    
}

function onPrevBtnClick(){
    if (PREV.click) {
        FIRST.classList.toggle('slider__active');
        SECOND.classList.toggle('slider__active');
    } 
}