<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import BaseDateCounter from '@/components/base/BaseDateCounter.vue';
import BaseCarousel from '@/components/base/BaseCarousel.vue';
import ProductCard from '@/components/products/ProductCard.vue';

/*** DATA ***/
import { store } from '@/data/store';


export default {
    components: { ProductCard, BaseDateCounter, BaseCarousel },

    data() {
        return {
            store
        };
    }

}
</script>


<template>
    <section class="container py-5">

        <header>
            <h3 class="text-center mb-5">Deal Of The Day</h3>
        </header>

        <!-- Counter -->
        <BaseDateCounter :date="new Date('2023-07-18').getTime()" class="mb-4" />

        <!-- Product Deals List -->
        <BaseCarousel :responsive="{ 'xs': 2, 'sm': 3, 'lg': 4 }" :total-items="store.productDeals.length" infinite
            :autoplay="3000">
            <div v-for="product in store.productDeals" :key="product.id">
                <ProductCard v-bind="product" />
            </div>
        </BaseCarousel>

    </section>
</template>


<style></style>