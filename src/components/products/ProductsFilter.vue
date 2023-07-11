<script>
import { store } from '@/data/store';

export default {
    data() {
        return {
            activeFilter: 'featured'
        };
    },

    methods: {
        onFilterClick(filterEndpoint) {

            this.activeFilter = filterEndpoint;
            store.productsFilter = filterEndpoint;

            this.$emit('products-filter-clicked')
        }
    },

    emits: ['products-filter-clicked']

}
</script>


<template>
    <ul class="d-flex gap-3 justify-content-center py-3">
        <li><button @click="onFilterClick('featured')" :class="{ active: activeFilter === 'featured' }">Featured</button>
        </li>
        <li><button @click="onFilterClick('new')" :class="{ active: activeFilter === 'new' }">New Arrival</button></li>
        <li><button @click="onFilterClick('best')" :class="{ active: activeFilter === 'best' }">Best Sellers</button></li>
    </ul>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

button.active {
    color: $col-yellow;
}
</style>