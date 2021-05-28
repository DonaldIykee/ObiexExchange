// import Dropdown from 'bootstrap.native/dist/components/dropdown-native.esm.js';

import constants from '@/includes/constants';
import throttle from 'lodash.throttle';

function _mediaQuery(x) {
  const mobileH = document.getElementById('mobileH');
  const desktopH = document.getElementById('desktopH');

  if (!mobileH || !desktopH) {
    return;
  }

  if (x.matches) {
    // Headers
    mobileH.style.display = 'block';
    desktopH.style.display = 'none';

    // Scroll
    onPageScrollMobile();
    window.addEventListener('scroll', throttle(onPageScrollMobile, 500));
  } else {
    // Headers
    desktopH.style.display = 'block';
    mobileH.style.display = 'none';

    // Scroll
    onPageScrollDesktop();
    window.addEventListener('scroll', throttle(onPageScrollDesktop, 500));
  }
}

function onPageScrollDesktop() {
  const headerBg = document.getElementById('headerBg');
  const headerWhite = document.getElementById('headerWhite');

  if (!headerBg || !headerWhite) {
    return;
  }

  const sectionTop = document.getElementById('section-top');
  const sectionTopHeight = (sectionTop && sectionTop.offsetHeight) || 0;
  const headerHeight = (headerBg && headerBg.offsetHeight) || 0;

  const height = sectionTopHeight - headerHeight;

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > height) {
    headerWhite.style.display = 'flex';
    headerBg.style.display = 'none';
  } else {
    headerBg.style.display = 'flex';
    headerWhite.style.display = 'none';
  }
}

function onPageScrollMobile() {
  const headerBgMobile = document.getElementById('headerBgMobile');
  const headerWhiteMobile = document.getElementById('headerBgWhiteMobile');

  if (!headerBgMobile || !headerWhiteMobile) {
    return;
  }

  const sectionTop = document.getElementById('section-top');
  const sectionTopHeight = (sectionTop && sectionTop.offsetHeight) || 0;
  const headerMobileHeight = (headerBgMobile && headerBgMobile.offsetHeight) || 0;

  const sectionTopRight = document.getElementById('section-top__right');
  const rightHeight = sectionTopRight && sectionTopRight.offsetHeight;

  var height = sectionTopHeight - rightHeight - headerMobileHeight;

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > height) {
    headerWhiteMobile.style.display = 'block';
    headerBgMobile.style.display = 'none';
  } else {
    headerBgMobile.style.display = 'block';
    headerWhiteMobile.style.display = 'none';
  }
}

export default function initExternalUtil() {
  var query = window.matchMedia(
    `(max-width: ${constants.TABLET_AND_DESKTOP_PIXEL_SIZE})`,
  );

  _mediaQuery(query);
  query.addListener(_mediaQuery);

  const dropdown = document.querySelector('.dropdown [data-toggle="dropdown"]');

  if (dropdown) {
    // new Dropdown(dropdown);
  }
}
