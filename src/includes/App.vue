<template>
  <router-view id="app" />
</template>

<script>
import { mapGetters } from 'vuex';

import initExternalUtil from '@/utils/external';

export default {
  computed: {
    ...mapGetters(['isLoggedIn', 'userProfile']),
  },
  metaInfo: {
    title: 'Sell Crypto, Get Naira instantly',
    titleTemplate: '%s | OTC Trading By Obiex',
    meta: [
      { charset: 'utf-8' },
      { name: 'http-equiv', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0' },
    ],
  },
  mounted() {
    initExternalUtil();

    if (this.isLoggedIn) {
      this.$setVisitorInfo(this.userProfile);
    }
  },
  updated() {
    // Used to make sure the init code re-runs after the DOM is updated
    // (e.g when there's a route change)
    initExternalUtil();
  },
};
</script>

<style>
/* Hide headers while the app initializes */
/* Prevents the unscripted styles from showing while the page is loading */
#mobileH {
  display: none;
}
#desktopH {
  display: none;
}

/* Fade auth container contents while the loader is showing */
.auth-container.loader > *,
.exchange-card.loader > * {
  opacity: 0.5;
}

.auth-container.loader > .section-loading,
.exchange-card.loader > .section-loading {
  opacity: 1;
}

/* General otp error styling; The existing rule is too specific */
.error-otp .otp-input {
  border: 1px solid #fe747d;
}

/* Customize v-select */
.v-select-custom .vs__dropdown-toggle {
  height: 50px;
}

.section-auth {
  min-height: 100vh;
}

a.isDisabled {
  color: currentColor;
  cursor: not-allowed;
  opacity: 0.5;
  text-decoration: none;
}

/* Inline SVG styling */
.about-container__img__container svg {
  width: 100%;
  height: 100%;
}
.section-choose .subsection .subsection-img svg {
  width: 100%;
  height: 100%;
}
.about-container__subsection .subsection-img-container .subsection-img svg {
  width: 100%;
  height: 100%;
}
.pay-success .pay-success-img svg {
  width: 100%;
  height: 100%;
}
.empty-trans .no-trans__img svg {
  width: 100%;
  height: 100%;
}
.section-coin__all__single .icon-container svg {
  width: 100%;
  height: 100%;
}
.pay-body-error__img svg {
  width: 100%;
  height: 100%;
}

/* Fix issue #34 */
.header-mobile {
  top: 0;
}

/* Progress bar is blocked by mobile header */
#nprogress {
  z-index: 9999;
  position: fixed;
  top: 0;
  width: 100%;
}

#nprogress .bar {
  height: 3px !important;
  background: linear-gradient(90deg, #0b8cad, #7d4af5) !important;
}

/* Display profile menu item on mobile header */
.header-mobile .show-content {
  min-height: 100%;
  padding-top: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.header-mobile .header-content .header-body,
.header-mobile .header-content .header-footer {
  padding-top: 0;
  padding-bottom: 10px;
}
@media only screen and (max-width: 767px) {
  .header-mobile .header-content .header-footer .header-social {
    padding: 10px;
    align-items: flex-start;
    justify-content: center;
  }
}
@media (max-height: 500px) {
  .header-mobile .show-content {
    padding-top: 14%;
    overflow-y: scroll;
  }
}

@media (max-height: 450px) {
  .header-mobile .show-content {
    padding-top: 20%;
  }
}
@media (max-height: 430px) {
  .header-mobile .show-content {
    padding-top: 40%;
  }
}
@media (max-height: 335px) {
  .header-mobile .show-content {
    padding-top: 55%;
  }
}

/* Profile menu item background is transparent on mobile */
#headerBgWhiteMobile .header-body {
  background: #fff;
}

/* Header social icons spacing */
a.header-social__img {
  margin-right: 2em;
}
a.header-social__img:first-of-type {
  margin-left: 4em;
}
a.header-social__img:last-of-type {
  margin-right: 0;
}

/* Empty transaction text was too close together */
.empty-trans .no-trans {
  width: auto;
}
</style>
