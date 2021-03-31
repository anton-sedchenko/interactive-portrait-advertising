'use strict';

function showBgElements(slideBgElements) {
    let mainContainer = document.querySelector('.main');
    let headerContainer = document.querySelector('.header');
	let initialHeader = document.querySelector('.initial-header-bg');

    slideBgElements.forEach(item => {
        
        if (item.classList.contains('header-bg') && !initialHeader) {

        	headerContainer.append(item);
        	setTimeout(() => item.classList.add('active'), 1);
        }

        if (item.classList.contains('header-newBanner') && !initialHeader) {

        	headerContainer.append(item);
        	setTimeout(() => item.classList.add('active'), 1);
        }

        if (item.classList.contains('bg-decor-item') && !item.classList.contains('header-bg')) {

        	mainContainer.append(item);
        	setTimeout(() => item.classList.add('bg-decor-item_active'), 1);
        }
    });
}
