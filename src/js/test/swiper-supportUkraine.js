import Swiper, { Navigation, Pagination } from "swiper";
import { ukraineFounds } from "../ukraineFounds";

Swiper.use([Navigation, Pagination]);

export const swiper = new Swiper(".mySwiper",( {
          direction: "vertical",
          slidesPerView: 4,

          breakpoints: {
            768: {
              slidesPerView: 6,
            }
            },
           mousewheel: {
             forceToAxis: true,
        },
          noSwiping: true,
          noSwipingClass: 'swiper-slide',
           
          navigation: {
            nextEl: ".support-menu__swiperbutton",
            
            disabledClass:  'support-menu__disabled',
               
          },})
);
      

let sliderButtonCounter = 0;
const sliderButton = document.querySelector('.support-menu__swiperbutton');

// console.log(sliderButton);

sliderButton.addEventListener('click', goToStartListClick)
        
export function goToStartListClick(evt) { // slider 'goToBeginningFunction'
    sliderButtonCounter++
    
    if (evt.currentTarget.classList.contains('support-menu__disabled') && (sliderButtonCounter%6 === 0 || sliderButtonCounter%4 === 0)) {
        swiper.slideTo(0);
    }
}

// support Ukraine

const foundationLink = document.querySelectorAll('.swiper-slide__link-js');
const foundationImg = document.querySelectorAll('.swiper-slide__img-js');

function writeFoundHrefSrc() {
    for (let i = 0; i < ukraineFounds.length; i++) {
        foundationLink[i].href = ukraineFounds[i].url;
        foundationImg[i].alt = ukraineFounds[i].title;
    }
}

writeFoundHrefSrc();