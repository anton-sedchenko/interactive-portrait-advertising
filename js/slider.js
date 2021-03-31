'use strict';

function slider(default_consts) {
    const constants = default_consts;
    const sliderWrapper = document.querySelector('.slider-wrapper');
    let slidesCardsArr = [];
    const slideItemArr = document.querySelectorAll('.slider-item');
    const leftBtnEl = document.querySelector('.arrow-left-container');
    const rightBtnEl = document.querySelector('.arrow-right-container');
    const slideWindow = document.querySelector('.slider-window');
    const slideLine = document.querySelector('.slide-line');
    let direction = -1;
    const slidesProductsUrlArr = constants.sliderCards.concat();
    let slidesNum = 0;
    const sliderItemStyles = window.getComputedStyle(slideItemArr[0]);
    const sliderItemWidth = sliderItemStyles.getPropertyValue('width');
    const shift = window.innerWidth + 'px';
    let x1 = null;
    let y1 = null;

    sliderWrapper.style.top = constants.sliderData.top;
    sliderWrapper.style.left = constants.sliderData.left;

    for (let i = 0; i < slideItemArr.length; i++) {
        const img = document.createElement('img');

        img.classList.add('product-picture');
        img.alt = 'product picture';
        slideItemArr[i].append(img);
    }

    slidesCardsArr = document.querySelectorAll('.product-picture');
    slidesNum = slidesCardsArr.length;

    // найти кол-во слайдов в доме
    let currentSlideNum = 0;
    const slidesArr = slideLine.children;
    let slidesNumber = [];

    for (let i = 0; i < slidesArr.length; i++) {

        slidesNumber.push(i);
    }

    // по нажатию на кнопку прокрутить слайды, заменить фон, переставить крайний слайд
    leftBtnEl.addEventListener('click', () => {
        left();
        bgChange(constants, currentSlideNum);
    });
    rightBtnEl.addEventListener('click', () => {
        right();
        bgChange(constants, currentSlideNum);
    });
    slideLine.addEventListener('transitionend', slideTransfer);

    // Заполнить слайдер изображениями
    for (let i = 0; i < slidesNum; i++) {
        const productPicture = slidesCardsArr[i];

        productPicture.src = `${slidesProductsUrlArr[i].sliderCardImg}`;
        slideItemArr[i].style.marginRight = (parseInt(window.innerWidth) - parseInt(sliderItemWidth)) / 2 + 'px';
        slideItemArr[i].style.marginLeft = (parseInt(window.innerWidth) - parseInt(sliderItemWidth)) / 2 + 'px';
    }

    // прокрутка влево
    function left() {

        if (direction === -1) {

            slideLine.appendChild(slideLine.firstElementChild); 
            direction = 1;
        }
        
        direction = 1;
        slideWindow.style.justifyContent = 'flex-end';
        slideLine.style.transform = `translate(${shift})`;
        currentSlideNum = currSlideNumCounter(currentSlideNum, direction, slidesNumber.length);
    }

    // прокрутка вправо
    function right() {

        if (direction === 1) {

            slideLine.prepend(slideLine.lastElementChild);
            direction = -1;
        }

        direction = -1;
        slideWindow.style.justifyContent = 'flex-start';
        slideLine.style.transform = `translate(-${shift})`;
        currentSlideNum = currSlideNumCounter(currentSlideNum, direction, slidesNumber.length);
    }

    // перенос крайнего слайда в начало
    function slideTransfer() {

        if (direction === -1) {

            slideLine.appendChild(slideLine.firstElementChild);
        } else if (direction === 1) {

            slideLine.prepend(slideLine.lastElementChild);
        }

        slideLine.style.transition = 'none';
        slideLine.style.transform = 'translate(0)';
        setTimeout(function() {
            slideLine.style.transition = 'all 0.5s';
        });
    }

    // Появление слайдера и кнопок
    setTimeout(() => sliderWrapper.style.left = 0, 600);
    setTimeout(() => {
        const leftArrowContainer = document.querySelector('.arrow-left-container');
        const rightArrowContainer = document.querySelector('.arrow-right-container');

        leftArrowContainer.classList.add('slider__arrow-container_active');
        rightArrowContainer.classList.add('slider__arrow-container_active');
    }, 1300);

    // реализация свайпа
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    function handleTouchStart(event) {
        const firstTouch = event.touches[0];
        x1 = firstTouch.clientX;
        y1 = firstTouch.clientY;
    }

    function handleTouchMove(event) {
        if (!x1 || !y1) {
            return false;
        }

        let x2 = event.touches[0].clientX;
        let y2 = event.touches[0].clientY;
        let xDiff = x2 - x1;
        let yDiff = y2 - y1;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            
            if (xDiff > 0) {
                left();
                bgChange(constants, currentSlideNum);    
            } else {
                right();
                bgChange(constants, currentSlideNum);
            }
        }
        x1 = null;
        y1 = null;
    }
}
