import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faSearch, faAngleDown, faBagShopping, faUser, faStar, faCalendarDays, faComments, faTruck, faSackDollar, faPercent, faHandHoldingDollar, faCircleChevronLeft, faCircleChevronRight, faCircle, faHeart, faMaximize, faEye, faQuoteLeft, faPlus, faLink, faLocationDot, faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { faFacebookF, faTwitter, faGooglePlusG, faSkype, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faSearch, faUser, faBagShopping, faAngleDown, faStar, faCalendarDays, faComments, faTruck, faSackDollar, faPercent, faHandHoldingDollar, faCircleChevronLeft, faCircleChevronRight, faCircle, faHeart, faMaximize, faEye, faQuoteLeft, faPlus, faLink, faLocationDot, faPhone, faEnvelope, faPaperPlane, faFacebookF, faTwitter, faGooglePlusG, faSkype, faInstagram);

createApp(App)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .mount('#app');
