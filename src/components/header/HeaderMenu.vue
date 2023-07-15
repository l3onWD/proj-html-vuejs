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
    }

}
</script>


<template>
    <ul class="header-menu">
        <li v-for="link in links" :key="link.text" :class="{ 'position-relative': link.submenu }">

            <a :href="link.url" :class="{ active: link.isActive }">{{ link.text
            }}</a>

            <ul v-if="link.submenu" class="header-submenu">
                <li v-for="sublink in link.submenu" :key="sublink.text">
                    <a :href="sublink.url" :class="{ active: sublink.isActive }">{{ sublink.text }}</a>
                </li>
            </ul>

        </li>
    </ul>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;


.header-menu {
    display: flex;
    justify-content: center;

    a {
        padding: 0.25rem 1rem;

        display: block;
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

        box-shadow: 0 0 8px 2px rgba($color: #000, $alpha: 0.2);
        z-index: 1;

    }

    li:hover .header-submenu {
        display: block;
    }
}
</style>