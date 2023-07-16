<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import BaseDropmenu from '@/components/base/BaseDropmenu.vue';

/*** DATA ***/
import { store } from '@/data/store';


export default {
    components: { BaseDropmenu },

    data: () => store

}
</script>


<template>
    <ul class="h-100 d-flex">

        <!-- Search Products -->
        <li>
            <button class="h-100 btn">
                <FontAwesomeIcon icon="fas fa-search" />
            </button>
        </li>

        <!-- User Account -->
        <li>
            <button class="h-100 btn">
                <FontAwesomeIcon icon="fas fa-user" />
            </button>
        </li>

        <!-- Shopping Cart -->
        <li>
            <BaseDropmenu text="Cart" position="left" class="h-100">

                <template #toggler>
                    <button class="h-100 btn">
                        <FontAwesomeIcon icon="fas fa-bag-shopping" /><span class="ms-2 text-yellow">({{ cart.length }})
                            €0.00</span>
                    </button>
                </template>

                <template #content>
                    <ul v-if="cart.length" class="px-2">
                        <li v-for="item in cart" :key="item">{{ item }}</li>
                    </ul>

                    <div v-else class="px-2">
                        <p class="text-gray mb-0">Add products to cart.</p>
                    </div>
                </template>
            </BaseDropmenu>
        </li>
    </ul>
</template>


<style scoped>
svg {
    font-size: 1.3rem;
}
</style>