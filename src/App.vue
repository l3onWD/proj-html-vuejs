<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';

/*** DATA ***/
import { productList, productDealsList } from './data/';
import { store } from './data/store';


export default {
    components: { PageHeader, PageMain },

    methods: {

        /*
        * FETCHING
        */

        fetchProducts(endpoint) {

            switch (endpoint) {
                case 'featured':
                    store.products = productList;
                    break;

                case 'new':
                    store.products = productList;
                    break;

                case 'best':
                    store.products = productList;
                    break;

                case 'deals':
                    store.productDeals = productDealsList;
                    break;

                default:
                    console.error(`#400 - Bad Request: ${endpoint} endpoint doesnt exist.`);
            }

        }
    },

    created() {
        this.fetchProducts('featured');
        this.fetchProducts('deals');
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