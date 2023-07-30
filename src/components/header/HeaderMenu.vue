<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import HeaderSubmenu from '@/components/header/HeaderSubmenu.vue';

/*** DATA ***/
import { headerMenuLinks } from '@/data/';


export default {
    components: { HeaderSubmenu },


    data() {
        return {
            links: headerMenuLinks
        };
    },


    props: {
        showMobileMenu: Boolean
    }

}
</script>


<template>
    <ul class="header-menu" :class="{ 'show': showMobileMenu }">
        <li v-for="link in links" :key="link.text" :class="{ 'position-relative': link.submenu }">

            <a :href="link.url" :class="{ active: link.isActive }">{{ link.text }}</a>

            <HeaderSubmenu v-if="link.submenu" :links="link.submenu" />

        </li>
    </ul>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;


.header-menu {
    position: fixed;
    top: 0;
    left: -200px;
    width: 200px;
    height: 100%;
    padding: 2rem 0;

    background-color: $col-dark;
    visibility: hidden;

    z-index: 1;
    transition: visibility 0.2s, left 0.2s;

    &.show {
        left: 0;

        visibility: visible;
    }

    a {
        padding: 0.5rem 1.5rem;

        display: block;

        &.active {
            color: $col-yellow;
        }
    }

}


/* -----------------------------------------
* RESPONSIVE
-------------------------------------------*/
/*** MEDIA LG ***/
@media screen and (min-width: 992px) {
    .header-menu {
        position: static;
        width: auto;
        height: auto;
        padding: 0;

        display: flex;
        justify-content: center;
        visibility: visible;
        opacity: 1;


        a {
            padding: 2rem 1.4rem;

            font-size: 1.1rem;
            font-weight: bold;
        }
    }
}
</style>