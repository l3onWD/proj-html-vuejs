<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import HeaderMenu from '@/components/header/HeaderMenu.vue';
import HeaderActions from '@/components/header/HeaderActions.vue';
import HeaderLogo from '@/components/header/HeaderLogo.vue';


export default {
    components: { HeaderMenu, HeaderActions, HeaderLogo }

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

                            <li><a href="#" class="vertical-separator ps-0">Wishlist(0)</a></li>

                            <li>

                                <button>Need Help?
                                    <FontAwesomeIcon icon="fas fa-angle-down" />
                                </button>

                                <ul class="d-none">
                                    <li><a href="#">123456748</a></li>
                                    <li><a href="#">123456748</a></li>
                                    <li><a href="#">123456748</a></li>
                                    <li><a href="#">123456748</a></li>
                                </ul>

                            </li>
                        </ul>

                    </li>

                    <!-- Right Panel -->
                    <li>
                        <a href="#" class="pe-0">123456748</a>
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
                    <li class="col-auto">
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

    & a {
        display: inline-block;
    }

    & a,
    & button {
        padding: 0.5rem 1.5rem;
    }
}
</style>