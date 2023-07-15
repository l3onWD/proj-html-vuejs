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
            contactLinks: contactLinks
        };
    }

}
</script>


<template>
    <header>

        <nav>
            <!-- Header Top -->
            <div class="header-top">
                <ul class="container d-flex justify-content-between align-items-center py-2">

                    <!-- Left Panel -->
                    <li>
                        <ul class="d-flex">

                            <li>
                                <a href="#" class="vertical-separator ps-0">Wishlist(0)</a>
                            </li>

                            <li>
                                <BaseDropmenu :links="contactLinks" text="Need Help?" />
                            </li>

                        </ul>

                    </li>

                    <!-- Right Panel -->
                    <li>
                        <a href="#" class="pe-0">Call 24/7 . 800-8754-987</a>
                    </li>

                </ul>
            </div>


            <!-- Header Bottom -->
            <div class="container header-bottom">

                <ul class="row align-items-center">
                    <!-- Logo -->
                    <li class="col-auto">
                        <HeaderLogo />
                    </li>

                    <!-- Menu -->
                    <li class="col">
                        <HeaderMenu />
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
    background-color: $col-dark;
}

.header-top {
    color: $col-gray;
    border-bottom: 1px solid $col-darkgray;

    a {
        padding: 0.5rem 1.5rem;

        display: inline-block;
    }
}
</style>