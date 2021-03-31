'use strict';

function bgChange(default_constants, currentSlideNum) {
	const bgThemesArr = Object.entries(default_constants.slideThemesBgElements);;
	const bgElementsArr = document.querySelectorAll('.bg-decor-item');
	const bgHeaderElement = document.querySelector('.header-bg');
	const headerNewBanner = document.querySelector('.header-newBanner');

	if (document.querySelector('.initial-header-bg')) {
		const initialHeaderBg = document.querySelector('.initial-header-bg');

		initialHeaderBg.classList.remove('initial-header-bg');
		setTimeout(() => initialHeaderBg.remove(), 600);
	}

	if (document.querySelector('.header-tagline')) {
		const tagline = document.querySelector('.header-tagline');

		tagline.classList.add('disable');
		setTimeout(() => tagline.remove(), 600);
	}

	if (document.querySelector('.initial-header-newBanner')) {
		const initialNewBanner = document.querySelector('.initial-header-newBanner');

		initialNewBanner.classList.add('disable');
		setTimeout(() => initialNewBanner.remove(), 600);
	}
	
	bgElementsArr.forEach(item => item.classList.add('disable'));
	setTimeout(() => bgElementsArr.forEach(item => item.remove()), 700);

	bgHeaderElement.classList.remove('active');
	setTimeout(() => bgHeaderElement.remove(), 600);

	if (headerNewBanner) {
		headerNewBanner.classList.remove('active');
		setTimeout(() => headerNewBanner.remove(), 600);
	}
	
	showBgElements(createBgElements(bgThemesArr[currentSlideNum]));
}
