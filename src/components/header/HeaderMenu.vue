<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** DATA ***/
import BaseDropmenu from '@/components/base/BaseDropmenu.vue';

/*** DATA ***/
import { headerMenuLinks } from '@/data/';

export default {
    components: { BaseDropmenu },
    data() {
        return {
            links: headerMenuLinks
        };
    }

}
</script>


<template>
    <ul class="d-flex justify-content-center">
        <li v-for="link in links" :key="link.text">

            <a v-if="!link.submenu" :href="link.url" :class="{ active: link.isActive }">{{ link.text }}</a>

            <BaseDropmenu v-else :links="link.submenu">
                <a :href="link.url" :class="{ active: link.isActive }">{{ link.text }}</a>
            </BaseDropmenu>
        </li>
    </ul>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;


a {
    padding: 2rem 1.5rem;

    display: block;
    font-size: 1.1rem;
    font-weight: bold;

    &.active {
        color: $col-yellow;
    }
}
</style>