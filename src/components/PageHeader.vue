<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import HeaderMenu from '@/components/header/HeaderMenu.vue';
import HeaderActions from '@/components/header/HeaderActions.vue';
import HeaderLogo from '@/components/header/HeaderLogo.vue';
import BaseDropmenu from '@/components/base/BaseDropmenu.vue';

/*** DATA ***/
import { contactLinks } from '@/data/';


export default {
    components: { HeaderMenu, HeaderActions, HeaderLogo, BaseDropmenu },

    data() {
        return {
            contactLinks: contactLinks,
            showMobileMenu: false
        };
    }

}
</script>


<template>
    <header>

        <nav>
            <!-- Header Top -->
            <div class="header-top">
                <ul class="container d-flex justify-content-center justify-content-sm-between align-items-center py-2">

                    <!-- Left Panel -->
                    <li>
                        <ul class="d-flex">

                            <li>
                                <a href="#" class="vertical-separator ps-0">Wishlist(0)</a>
                            </li>

                            <li>
                                <BaseDropmenu text="Need Help?">

                                    <template #toggler>
                                        <a href="#">
                                            Need Help?
                                            <FontAwesomeIcon icon="fas fa-angle-down" />
                                        </a>
                                    </template>

                                    <template #content>
                                        <ul>
                                            <li v-for="link in contactLinks" :key="link.text">
                                                <a :href="link.url">{{ link.text }}</a>
                                            </li>
                                        </ul>
                                    </template>
                                </BaseDropmenu>
                            </li>

                        </ul>

                    </li>

                    <!-- Right Panel -->
                    <li>
                        <a href="#" class="d-none d-sm-inline pe-0">Call 24/7 . 800-8754-987</a>
                    </li>

                </ul>
            </div>


            <!-- Header Bottom -->
            <div class="container header-bottom">

                <ul class="row gx-3 align-items-center">

                    <li class="col-auto">
                        <button @click="showMobileMenu = !showMobileMenu" class="btn d-lg-none p-2">
                            <FontAwesomeIcon icon="fas fa-bars" size="2x" />
                        </button>
                    </li>

                    <!-- Logo -->
                    <li class="col-auto">
                        <HeaderLogo />
                    </li>

                    <!-- Menu -->
                    <li class="col">
                        <div v-if="showMobileMenu" @click="showMobileMenu = !showMobileMenu" class="overlay d-lg-none">
                        </div>
                        <HeaderMenu :show-mobile-menu="showMobileMenu" />
                    </li>

                    <!-- Actions -->
                    <li class="col-auto align-self-stretch">
                        <HeaderActions />
                    </li>
                </ul>

            </div>

        </nav>

    </header>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;


header {
    position: sticky;
    top: -50px;

    background-color: $col-dark;

    box-shadow: 0 0 8px 2px rgba($color: #000, $alpha: 0.2);
    z-index: 1;
}

.header-top {
    color: $col-gray;
    border-bottom: 1px solid $col-darkgray;

    a {
        padding: 0.5rem 1.5rem;

        display: block;
    }
}
</style>