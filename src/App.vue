<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';

/*** DATA ***/
import { productList } from './data/';
import { store } from './data/store';


export default {
    components: { PageHeader, PageMain },

    methods: {
        getProducts() {
            store.products = productList;
        }
    },

    created() {
        this.getProducts();
    }


}
</script>


<template>
    <PageHeader />

    <PageMain />
</template>


<style lang="scss">
@use './assets/scss/style.scss'
</style>