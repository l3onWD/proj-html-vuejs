<script>
export default {
    data() {
        return {
            showMobileMenu: false
        };
    },

    props: {
        links: Array,
        type: String
    }
}
</script>


<template>
    <button class="header-submenu-toggler" @click="showMobileMenu = !showMobileMenu">
        <FontAwesomeIcon :icon="['fas', showMobileMenu ? 'angle-right' : 'angle-down']" />
    </button>

    <ul v-if="type !== 'full'" class="header-submenu" :class="[{ 'show': showMobileMenu }, type ? `submenu-${type}` : '']">
        <li v-for="link in links" :key="link.text">

            <a :href="link.url" :class="{ active: link.isActive }">{{ link.text }}</a>

        </li>
    </ul>

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


/*** SUBMENU ***/
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


/*** TOGGLER ***/
.header-submenu-toggler {
    position: absolute;
    top: 0;
    right: 0;
    width: 64px;
    height: 32px;
    padding: 0 0.5rem;

    display: flex;
    justify-content: flex-end;
    align-items: center;
}

/* -----------------------------------------
* RESPONSIVE
-------------------------------------------*/
/*** MEDIA LG ***/
@media screen and (min-width: 992px) {

    /*** SUBMENU ***/
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


    /*** TOGGLER ***/
    .header-submenu-toggler {
        display: none;
    }
}
</style>