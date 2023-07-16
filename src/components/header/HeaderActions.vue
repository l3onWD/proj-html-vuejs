<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import BaseDropmenu from '@/components/base/BaseDropmenu.vue';
import BaseSendForm from '@/components/base/BaseSendForm.vue';

/*** DATA ***/
import { store } from '@/data/store';


export default {
    components: { BaseDropmenu, BaseSendForm },

    data: () => store

}
</script>


<template>
    <ul class="h-100 d-flex">

        <!-- Search Products -->
        <li>
            <BaseDropmenu text="Cart" position="left" class="h-100">

                <template #toggler>
                    <button class="h-100 btn">
                        <FontAwesomeIcon icon="fas fa-search" />
                    </button>
                </template>

                <template #content>
                    <div class="px-4 py-2">
                        <BaseSendForm icon-class="search" />
                    </div>
                </template>
            </BaseDropmenu>
        </li>

        <!-- User Account -->
        <li>
            <BaseDropmenu text="Cart" position="left" class="h-100">

                <template #toggler>
                    <button class="h-100 btn">
                        <FontAwesomeIcon icon="fas fa-user" />
                    </button>
                </template>

                <template #content>
                    <ul class="text-gray px-2">
                        <li>
                            <a href="#" class="d-block p-2">Login</a>
                        </li>
                        <li>
                            <a href="#" class="d-block p-2">Create Account</a>
                        </li>
                    </ul>

                </template>
            </BaseDropmenu>
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
                    <ul v-if="cart.length" class="px-3">
                        <li v-for="item in cart" :key="item">{{ item }}</li>
                    </ul>

                    <div v-else class="px-3">
                        <p class="text-gray text-nowrap mb-0">Add products to cart.</p>
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