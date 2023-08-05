<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import HeaderSubmenuToggler from '@/components/header/HeaderSubmenuToggler.vue';

export default {
    components: { HeaderSubmenuToggler },
    data() {
        return {
            showMobileMenu: false
        };
    },

    props: {
        links: Array,
        type: String
    },

    methods: {
        onMenuToggled(show) {
            this.showMobileMenu = show;
        }
    }
}
</script>


<template>
    <!-- Submenu Toggler -->
    <HeaderSubmenuToggler @menu-toggled="onMenuToggled" />

    <!-- Submenu Links -->
    <ul v-if="type !== 'full'" class="header-submenu" :class="[{ 'show': showMobileMenu }, type ? `submenu-${type}` : '']">
        <li v-for="link in links" :key="link.text">

            <a :href="link.url" :class="{ active: link.isActive }">{{ link.text }}</a>

        </li>
    </ul>

    <!-- Submenu Full Width -->
    <div v-else class="header-submenu" :class="[{ 'show': showMobileMenu }, type ? `submenu-${type}` : '']">
        <div class="container">

            <div class="row flex-column flex-lg-row">

                <ul v-for="menuCol in links" :key="menuCol" class="col">
                    <li v-for="link in menuCol" :key="link.text">

                        <a :href="link.url" :class="{ active: link.isActive }">{{ link.text }}</a>

                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;


.header-submenu {
    padding-left: 1rem;

    display: none;
    border-top: 1px solid $col-darkgray;
    border-bottom: 1px solid $col-darkgray;

    a {
        padding: 0.5rem 1.5rem;

        display: block;

        &.active {
            color: $col-yellow;
        }
    }
}

.header-submenu.show {
    display: block;
}

/* -----------------------------------------
* RESPONSIVE
-------------------------------------------*/
/*** MEDIA LG ***/
@media screen and (min-width: 992px) {

    .header-submenu {
        padding: 0.75rem 0;
        position: absolute;
        top: 100%;
        left: 0;
        min-width: 150px;

        background-color: $col-dark;
        border: 1px solid $col-darkgray;

        z-index: 1;

        a {
            padding: 0.25rem 1rem;
        }

        &.submenu-right {
            left: auto;
            right: 0;
        }


        &.submenu-full {
            left: 0;
            right: 0;
        }

    }

    .header-menu .header-submenu {
        display: none;
    }

    li:hover>.header-submenu {
        display: block;
    }
}
</style>