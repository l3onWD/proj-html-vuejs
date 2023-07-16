<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';

/*** DATA ***/
import { store } from './data/store';
import axios from 'axios';


export default {
    components: { PageHeader, PageMain, PageFooter },

    methods: {

        /*
        * FETCHING
        */

        fetchProducts(filter) {

            const options = {
                params: {}
            };

            switch (filter) {
                case '':
                    break;

                case 'featured':
                    options.params = { featured: true }
                    break;

                case 'new':
                    options.params = {
                        _sort: 'created',
                        _order: 'desc'
                    }
                    break;

                case 'best':
                    options.params = {
                        _sort: 'totalSell',
                        _order: 'desc'
                    }
                    break;

                case 'deals':
                    options.params = { deal: true }
                    break;

                default:
                    console.error(`#400 - Bad Request: ${endpoint} endpoint doesnt exist.`);
            }

            axios.get(`http://localhost:3000/products`, options)
                .then(({ data }) => {
                    store.products = data;
                });

        },

        fetchBlogs() {
            axios.get(`http://localhost:3000/blogs`)
                .then(({ data }) => {
                    store.blogs = data;
                });
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

    <PageFooter />
</template>


<style lang="scss">
@use './assets/scss/style.scss'
</style>