<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';

/*** DATA ***/
import { productList, blogList } from './data/';
import { store } from './data/store';


export default {
    components: { PageHeader, PageMain },

    methods: {

        /*
        * FETCHING
        */

        fetchProducts(endpoint) {

            switch (endpoint) {
                case '':
                    store.products = productList;
                    break;

                case 'featured':
                    store.products = productList.filter(({ featured }) => featured);
                    break;

                case 'new':
                    const newProducts = [...productList];
                    store.products = newProducts.sort((a, b) => b.created - a.created).slice(0, 6);
                    break;

                case 'best':
                    const bestProducts = [...productList];
                    store.products = bestProducts.sort((a, b) => b.totalSell - a.totalSell).slice(0, 6);
                    break;

                case 'deals':
                    store.productDeals = productList.filter(({ deal }) => deal);;
                    break;

                default:
                    console.error(`#400 - Bad Request: ${endpoint} endpoint doesnt exist.`);
            }

        },

        fetchBlogs() {
            store.blogs = blogList;
        },


        /*
        * FILTERING
        */

        searchProducts() {
            if (!store.productsFilter) this.fetchProducts('');
            else this.fetchProducts(store.productsFilter);
        }
    },

    created() {
        this.fetchProducts('featured');
        this.fetchProducts('deals');

        this.fetchBlogs();
    }


}
</script>


<template>
    <PageHeader />

    <PageMain @products-filter-changed="searchProducts" />
</template>


<style lang="scss">
@use './assets/scss/style.scss'
</style>