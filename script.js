//Menu link

const MENU = document.getElementById('header__menu');
MENU.addEventListener('click', (e) => {
    if(e.target.nodeName == "A"){
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    e.target.classList.add('active');}
});

//Slider

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


//Activation phone screen

const VERTICAL = document.getElementById('vertical');
const HORIZONTAL = document.getElementById('horizontal');
let iphoneVertical = document.getElementById('iphone__vertical');
let iphoneHorizontal = document.getElementById('iphone__horizontal');

iphoneVertical.addEventListener('click', onClickVerticalScreen);

function onClickVerticalScreen(){
   if(iphoneVertical.click){
       VERTICAL.classList.toggle('screen__off');
   }  
}

iphoneHorizontal.addEventListener('click', onClickHorizontalScreen);

function onClickHorizontalScreen(){
   if(iphoneHorizontal.click){
       HORIZONTAL.classList.toggle('screen__off');
   }  
}

//Portfolio
const PORTFOLIO_ELEM = document.querySelectorAll('.portfolio__image--element');
const PORTFOLIO = document.getElementById('portfolio__menu--title');
PORTFOLIO.addEventListener('click', (e) =>{
    if(e.target.nodeName == "LI"){
    PORTFOLIO.querySelectorAll('li').forEach(el => el.classList.remove('active__element'));
    e.target.classList.add('active__element')
    if (event.target.classList[1] == 'remove') {
        PORTFOLIO_ELEM[0].classList.remove('portfolio__image--remove');
        PORTFOLIO_ELEM[1].classList.remove('portfolio__image--remove');
        PORTFOLIO_ELEM[2].classList.remove('portfolio__image--remove');
        PORTFOLIO_ELEM[3].classList.remove('portfolio__image--remove');
    };
    if (event.target.classList[1] == 'remove2') {
        PORTFOLIO_ELEM[0].classList.add('portfolio__image--remove');
        PORTFOLIO_ELEM[1].classList.add('portfolio__image--remove');
        PORTFOLIO_ELEM[2].classList.add('portfolio__image--remove');
        PORTFOLIO_ELEM[3].classList.add('portfolio__image--remove');
    };
    if (event.target.classList[1] == 'remove3') {
        PORTFOLIO_ELEM[3].classList.add('portfolio__image--remove');
        PORTFOLIO_ELEM[2].classList.remove('portfolio__image--remove');
        PORTFOLIO_ELEM[1].classList.remove('portfolio__image--remove');
        PORTFOLIO_ELEM[0].classList.add('portfolio__image--remove');
    };
    if (event.target.classList[1] == 'remove4') {
        PORTFOLIO_ELEM[0].classList.add('portfolio__image--remove');
        PORTFOLIO_ELEM[1].classList.add('portfolio__image--remove');
        PORTFOLIO_ELEM[2].classList.add('portfolio__image--remove');
        PORTFOLIO_ELEM[3].classList.remove('portfolio__image--remove');
    };
}
})




