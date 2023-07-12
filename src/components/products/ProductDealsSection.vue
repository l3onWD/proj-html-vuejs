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

        <!-- Counter -->
        <BaseDateCounter :date="new Date('2023-07-18').getTime()" />

        <!-- Product Deals List -->
        <BaseCarousel :visible-slides="4">
            <div v-for="product in store.productDeals" :key="product.id" class="col">
                <ProductCard v-bind="product" />
            </div>
        </BaseCarousel>

    </section>
</template>


<style></style>