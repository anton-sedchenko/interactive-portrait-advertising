'use strict';

function currSlideNumCounter(currentSlide, direction, slidesNumber) {
	let currentSlideNum = currentSlide;
	// если нажата правая кнопка
	if (direction === -1) {
		// выводить номер текущего слайда
        if (currentSlideNum === slidesNumber - 1) {

            currentSlideNum = 0;

            return currentSlideNum;
        } else {

            currentSlideNum += 1;
        }

        return currentSlideNum;
	}

	// если нажата левая кнопка
	if (direction === 1) {
        if (currentSlideNum === 0) {
            currentSlideNum = slidesNumber - 1;

            return currentSlideNum;
        } else {
            currentSlideNum -= 1;
        }

        return currentSlideNum;
    }
}
