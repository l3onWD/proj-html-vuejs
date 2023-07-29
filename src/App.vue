<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';
import BaseLoader from './components/base/BaseLoader.vue';
import TheScrollTopButton from './components/base/TheScrollTopButton.vue';

/*** DATA ***/
import { store } from './data/store';
import axios from 'axios';


export default {
    components: { PageHeader, PageMain, PageFooter, BaseLoader, TheScrollTopButton },

    data() {
        return {
            loader: 0
        };
    },

    methods: {

        /*
        * FETCHING
        */

        fetchProducts(filter) {

            const options = {
                params: {}
            };

            switch (filter) {
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
            }

            this.loader++;
            axios.get(`http://localhost:3000/products`, options)
                .then(({ data }) => {
                    store.products = data;
                }).catch(err => {
                    console.error(err);
                })
                .then(() => {
                    this.loader--;
                });

        },

        fetchBlogs() {

            this.loader++;
            axios.get(`http://localhost:3000/blogs`)
                .then(({ data }) => {
                    store.blogs = data;
                }).catch(err => {
                    console.error(err);
                })
                .then(() => {
                    this.loader--;
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

    <TheScrollTopButton />

    <BaseLoader v-if="loader" />
</template>


<style lang="scss">
@use './assets/scss/style.scss'
</style>