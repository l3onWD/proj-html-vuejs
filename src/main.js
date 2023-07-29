import { createApp } from 'vue';
import App from './App.vue';


/*** FONT AWESOME DATA ***/
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faSearch, faAngleDown, faBagShopping, faUser, faStar, faCalendarDays, faComments, faTruck, faSackDollar, faPercent, faHandHoldingDollar, faCircleChevronLeft, faCircleChevronRight, faCircle, faHeart, faMaximize, faEye, faQuoteLeft, faPlus, faLink, faLocationDot, faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { faFacebookF, faTwitter, faGooglePlusG, faSkype, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faSearch, faUser, faBagShopping, faAngleDown, faStar, faCalendarDays, faComments, faTruck, faSackDollar, faPercent, faHandHoldingDollar, faCircleChevronLeft, faCircleChevronRight, faCircle, faHeart, faMaximize, faEye, faQuoteLeft, faPlus, faLink, faLocationDot, faPhone, faEnvelope, faPaperPlane, faFacebookF, faTwitter, faGooglePlusG, faSkype, faInstagram);



/*** INIT APP ***/
createApp(App)

    /*** CUSTOM DIRECTIVES ***/
    .directive('click-outside', {
        created(el, binding) {
            el.clickOutsideEvent = e => {
                if (!el.contains(e.target)) binding.value();
            };

            document.addEventListener('click', el.clickOutsideEvent);
        },

        unmounted(el) {
            document.removeEventListener('click', el.clickOutsideEvent);
        }
    })

    /*** GLOBAL COMPONENTS ***/
    .component('FontAwesomeIcon', FontAwesomeIcon)

    /*** MOUNTING ***/
    .mount('#app');
