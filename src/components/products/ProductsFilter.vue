<script>
import { store } from '@/data/store';

export default {
    methods: {
        onFilterClick(filterEndpoint) {
            store.productsFilter = filterEndpoint;
            this.$emit('products-filter-clicked')
        }
    },

    emits: ['products-filter-clicked']

}
</script>


<template>
    <ul class="d-flex gap-3 justify-content-center py-3">
        <li><button @click="onFilterClick('featured')" class="active">Featured</button></li>
        <li><button @click="onFilterClick('new')">New Arrival</button></li>
        <li><button @click="onFilterClick('best')">Best Sellers</button></li>
    </ul>
</template>


<style></style>