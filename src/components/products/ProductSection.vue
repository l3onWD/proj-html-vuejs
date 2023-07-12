<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import BaseNavTabs from '@/components/base/BaseNavTabs.vue';
import BaseCarousel from '@/components/base/BaseCarousel.vue';
import ProductCard from '@/components/products/ProductCard.vue';

/*** DATA ***/
import { store } from '@/data/store';


export default {
    components: { ProductCard, BaseNavTabs, BaseCarousel },

    data() {
        return {
            store
        };
    },

    methods: {
        onProductsFilterChange(filterValue) {
            store.productsFilter = filterValue;
            this.$emit('products-filter-changed')
        }
    },

    emits: ['products-filter-changed']

}
</script>


<template>
    <section class="container py-5">

        <!-- Filter -->
        <BaseNavTabs :tabList="[
            { value: 'featured', text: 'Featured' },
            { value: 'new', text: 'New Arrival' },
            { value: 'best', text: 'Best Sellers' }]" @tab-changed="onProductsFilterChange" />


        <!-- Product List -->
        <BaseCarousel :visible-slides="4">
            <div v-for="product in store.products" :key="product.id" class="col">
                <ProductCard v-bind="product" />
            </div>
        </BaseCarousel>

    </section>
</template>


<style></style>