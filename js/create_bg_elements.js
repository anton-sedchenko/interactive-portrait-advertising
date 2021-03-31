'use strict';

function createBgElements(bgThemesArr) {
    const bgElementsDataArr = Object.entries(bgThemesArr[1]);
    let bgElementsArr = [];

    bgElementsDataArr.forEach(item => {
        const bgElement = document.createElement('div');

        if (item[0] === 'headerBg') {

            bgElement.classList.add('header-bg');
            bgElement.style.backgroundImage = `url(${item[1].imgUrl}`;
            bgElement.style.height = item[1].height;
            bgElement.style.width = item[1].width;
            bgElement.style.top = item[1].top;
            bgElement.style.left = item[1].left;

            bgElementsArr.push(bgElement);
        }

        if (item[0] === 'newBanner') {
            const headerNewBanner = document.createElement('img');

            headerNewBanner.classList.add('header-newBanner');
            headerNewBanner.src = item[1].imgUrl;
            headerNewBanner.alt = 'new banner';
            headerNewBanner.style.height = item[1].height;
            headerNewBanner.style.width = item[1].width;
            headerNewBanner.style.top = item[1].top;
            headerNewBanner.style.left = item[1].left;

            bgElementsArr.push(headerNewBanner);
        } 

        if (item[0] !== 'newBanner' && item[0] !== 'headerBg') {
            bgElement.classList.add('bg-decor-item');
            bgElement.style.backgroundImage = `url(${item[1].imgUrl}`;
            bgElement.style.height = item[1].height;
            bgElement.style.width = item[1].width;
            bgElement.style.top = item[1].top;
            bgElement.style.left = item[1].left;

            bgElementsArr.push(bgElement);    
        }
    });

    return bgElementsArr;
}
