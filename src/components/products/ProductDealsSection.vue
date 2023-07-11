<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import ProductCard from '@/components/products/ProductCard.vue';
import BaseDateCounter from '@/components/base/BaseDateCounter.vue';

/*** DATA ***/
import { store } from '@/data/store';


export default {
    components: { ProductCard, BaseDateCounter },

    data() {
        return {
            store
        };
    }

}
</script>


<template>
    <section class="bg-danger container py-5">

        <!-- Counter -->
        <BaseDateCounter :date="new Date('2023-07-18').getTime()" />

        <!-- Product Deals List -->
        <div class="row row-cols-4">
            <div v-for="product in store.productDeals" :key="product.id" class="col">
                <ProductCard v-bind="product" />
            </div>
        </div>
    </section>
</template>


<style></style>