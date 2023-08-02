<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import BaseCarousel from '@/components/base/BaseCarousel.vue';


export default {
    components: { BaseCarousel }

}
</script>


<template>
    <section class="container py-5">

        <!-- Product Deals List -->
        <BaseCarousel :responsive="{ 'xs': 2, 'sm': 3, 'md': 4, 'lg': 5 }" :total-items="5" infinite :autoplay="3000"
            :nav-arrow-icons="['angle-left', 'angle-right']">
            <div>
                <div class="px-3">
                    <img src="../../assets/img/brands/brand-01.png" alt="Brand 01" class="img-fluid">
                </div>
            </div>

            <div>
                <div class="px-3">
                    <img src="../../assets/img/brands/brand-02.png" alt="Brand 02" class="img-fluid">
                </div>
            </div>

            <div>
                <div class="px-3">
                    <img src="../../assets/img/brands/brand-03.png" alt="Brand 03" class="img-fluid">
                </div>
            </div>

            <div>
                <div class="px-3">
                    <img src="../../assets/img/brands/brand-04.png" alt="Brand 04" class="img-fluid">
                </div>
            </div>

            <div>
                <div class="px-3">
                    <img src="../../assets/img/brands/brand-05.png" alt="Brand 05" class="img-fluid">
                </div>
            </div>
        </BaseCarousel>

    </section>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;


section {
    border-top: 1px solid $col-darkgray;
}
</style>