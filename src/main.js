import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faSearch, faAngleDown, faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch, faUser, faBagShopping, faAngleDown);

createApp(App)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .mount('#app');
