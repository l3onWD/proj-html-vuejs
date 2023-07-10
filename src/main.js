import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faSearch, faAngleUp, faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch, faUser, faBagShopping, faAngleUp);

createApp(App)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .mount('#app');
