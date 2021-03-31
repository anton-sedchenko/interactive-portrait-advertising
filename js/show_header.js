'use strict';

function showHeader(slideHeaderElements) {
    let header = slideHeaderElements;
    let headerContainer = document.querySelector('.header');

    headerContainer.append(header);
    moveDownHeader();
}

// вспомогательная ф-ция опустить хедер
function moveDownHeader() {
    let headerBg = document.querySelector('.header-bg');
    let headerTagline = document.querySelector('.header-tagline');
    let headerNewBanner = document.querySelector('.initial-header-newBanner');

    setTimeout(() => headerBg.style.top = 0, 500);
    setTimeout(() => headerTagline.style.transform = 'scale(1)', 800);
    setTimeout(() => headerNewBanner.style.top = 0, 800);
}
