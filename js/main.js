'use strict';

function runCreatives(default_consts) {
    const constants = default_consts;
    const initialSlideNum = 0;
    const bgThemesArr = Object.entries(constants.slideThemesBgElements);
    const headerThemesArr = Object.entries(constants.headerData);
    const sliderThemesArr = Object.entries(constants.sliderData);
    const slideHeaderElements = createHeader(headerThemesArr[initialSlideNum]);
    const slideBgElements = createBgElements(bgThemesArr[initialSlideNum]);
    
    showHeader(slideHeaderElements);
    showBgElements(slideBgElements);
    slider(constants);
    showFooter();
}

if (window.screen.width === 375) {

    runCreatives(default_data);
    window.addEventListener('load', (event) => {
        const loadingPage = document.querySelector('.loading-page');

        loadingPage.style.display = 'none';
    });
} else {

    runCreatives(data_414x736);
    window.addEventListener('load', (event) => {
        const loadingPage = document.querySelector('.loading-page');

        loadingPage.style.display = 'none';
    });
}
