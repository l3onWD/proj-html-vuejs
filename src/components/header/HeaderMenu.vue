<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** DATA ***/
import { headerMenuLinks } from '@/data/';


export default {
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

            <a :href="link.url" :class="{ active: link.showMobileMenu }">{{ link.text
            }}</a>

            <ul v-if="link.submenu" class="header-submenu">
                <li v-for="sublink in link.submenu" :key="sublink.text">
                    <a :href="sublink.url" :class="{ active: sublink.showMobileMenu }">{{ sublink.text }}</a>
                </li>
            </ul>

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
    opacity: 0;

    z-index: 1;

    &.show {
        left: 0;

        visibility: visible;
        opacity: 1;
    }

    a {
        padding: 0.5rem 1.5rem;

        display: block;
    }

    .header-submenu {
        padding-left: 1rem;

        border-top: 1px solid $col-darkgray;
        border-bottom: 1px solid $col-darkgray;
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
            padding: 0.25rem 1rem;
        }

        &>li>a {
            padding: 2rem 1.4rem;

            display: block;
            font-size: 1.1rem;
            font-weight: bold;

            &.active {
                color: $col-yellow;
            }
        }

        .header-submenu {
            padding: 0.75rem 0;
            position: absolute;
            top: 100%;
            left: 0;
            min-width: 150px;

            display: none;
            background-color: $col-dark;
            border: 1px solid $col-darkgray;

            z-index: 1;

        }

        li:hover .header-submenu {
            display: block;
        }
    }
}
</style>