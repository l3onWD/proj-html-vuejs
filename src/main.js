import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faSearch, faAngleDown, faBagShopping, faUser, faStar, faCalendarDays, faComments, faTruck, faSackDollar, faPercent, faHandHoldingDollar, faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch, faUser, faBagShopping, faAngleDown, faStar, faCalendarDays, faComments, faTruck, faSackDollar, faPercent, faHandHoldingDollar, faCircleChevronLeft, faCircleChevronRight);

createApp(App)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .mount('#app');
