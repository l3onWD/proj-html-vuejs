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
            this.$refs.productCarousel.setIndex(0);
            this.$emit('products-filter-changed');
        }
    },

    emits: ['products-filter-changed']

}
</script>


<template>
    <section class="container py-5">

        <header>
            <h3 class="text-center mb-5">Our Products</h3>
        </header>

        <!-- Filter -->
        <BaseNavTabs :tabList="[
            { value: 'featured', text: 'Featured' },
            { value: 'new', text: 'New Arrival' },
            { value: 'best', text: 'Best Sellers' }]" @tab-changed="onProductsFilterChange" class="mb-4" />


        <!-- Product List -->
        <BaseCarousel :responsive="{ 'xs': 2, 'sm': 3, 'md': 4 }" :total-items="store.products.length" infinite
            ref="productCarousel">
            <div v-for="product in store.products" :key="product.id">
                <ProductCard v-bind="product" />
            </div>
        </BaseCarousel>

    </section>
</template>


<style></style>