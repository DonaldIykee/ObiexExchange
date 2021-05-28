import Vue from 'vue';
import VueAnalytics from 'vue-ua';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'noty/lib/noty.css';
import 'noty/lib/themes/bootstrap-v3.css';
import 'vue-select/dist/vue-select.css';
import './assets/stylesheets/screen.css';

import App from './App.vue';
import BaseButton from '@/components/util/BaseButton.vue';
import BaseCheckbox from '@/components/form/BaseCheckbox.vue';
import BaseTooltip from '@/components/util/BaseTooltip.vue';
import ExchangeSection from '@/components/exchange/ExchangeSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import InputRow from '@/components/form/InputRow.vue';
import TextInput from '@/components/form/TextInput.vue';
import vSelect from 'vue-select';

import constants from './utils/constants';
import './utils';
import './registerServiceWorker';


Vue.config.productionTip = false;

// Global definitions
Vue.component('BaseButton', BaseButton);
Vue.component('BaseCheckbox', BaseCheckbox);
Vue.component('BaseTooltip', BaseTooltip);
Vue.component('ExchangeSection', ExchangeSection);
Vue.component('FooterSection', FooterSection);
Vue.component('InputRow', InputRow);
Vue.component('TextInput', TextInput);
Vue.component('v-select', vSelect);
Vue.use(VueAnalytics, {
  appName: 'Obiex Africa',
  appVersion: '1.0',
  trackingId: 'UA-179478505-1',
});

// App initialization
initApp();
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');

async function initApp() {
  await store.dispatch('resumeSession');

  if (store.getters.isLoggedIn) {
    await store.dispatch('fetchBankList');
  }

  await loadCurrencyList();

  store.dispatch('setDefaultCurrency');
}

// Helpers

async function loadCurrencyList() {
  await store.dispatch('loadCurrencyList');

  setTimeout(async function updateCurrencyList() {
    await store.dispatch('loadCurrencyList');
    setTimeout(updateCurrencyList, constants.CURRENCY_REFRESH_INTERVAL);
  }, constants.CURRENCY_REFRESH_INTERVAL);
}
