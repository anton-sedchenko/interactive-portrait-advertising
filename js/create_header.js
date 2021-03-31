'use strict';

function createHeader(headerThemesArr) {
    const headerDataArr = headerThemesArr;
    const headerBg = document.createElement('div');
    const headerTagline = document.createElement('img');
    const headerNewBanner = document.createElement('img');

    headerBg.classList.add('header-bg');
    headerBg.classList.add('initial-header-bg');
    headerBg.style.backgroundImage = `url(${headerDataArr[1].headerBgUrl}`;
    headerBg.style.height = headerDataArr[1].bgHeight;
    headerBg.style.width = headerDataArr[1].bgWidth;
    headerBg.style.top = headerDataArr[1].bgTop;
    headerBg.style.left = headerDataArr[1].bgLeft;

    headerBg.append(headerTagline);
    headerTagline.classList.add('header-tagline');
    headerTagline.src = headerDataArr[1].taglineUrl;
    headerTagline.alt = 'tag line';
    headerTagline.style.height = headerDataArr[1].taglineHeight;
    headerTagline.style.width = headerDataArr[1].taglineWidth;
    headerTagline.style.top = headerDataArr[1].taglineTop;
    headerTagline.style.left = headerDataArr[1].taglineLeft;

    headerBg.append(headerNewBanner);
    headerNewBanner.classList.add('initial-header-newBanner');
    headerNewBanner.src = headerDataArr[1].newBannerUrl;
    headerNewBanner.alt = 'new banner';
    headerNewBanner.style.height = headerDataArr[1].newBannerHeight;
    headerNewBanner.style.width = headerDataArr[1].newBannerWidth;
    headerNewBanner.style.top = headerDataArr[1].newBannerTop;
    headerNewBanner.style.left = headerDataArr[1].newBannerLeft;

    return headerBg;
}
